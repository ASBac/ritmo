export const STORAGE_KEY = 'ritmo.tasks.v1'
export const STORAGE_VERSION = 1

const validPriorities = new Set(['high', 'medium', 'low'])
const validSchedules = new Set(['today'])

export function createTask(title, priority = 'medium', idFactory = crypto.randomUUID) {
  const normalizedTitle = title.trim()

  if (!normalizedTitle) {
    throw new Error('A tarefa precisa ter um título.')
  }

  return {
    id: idFactory(),
    title: normalizedTitle,
    priority: validPriorities.has(priority) ? priority : 'medium',
    schedule: 'today',
    completed: false,
  }
}

export function toggleTask(tasks, taskId) {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task,
  )
}

export function renameTask(tasks, taskId, title) {
  const normalizedTitle = title.trim()

  if (!normalizedTitle) {
    return tasks
  }

  return tasks.map((task) =>
    task.id === taskId ? { ...task, title: normalizedTitle } : task,
  )
}

export function removeTask(tasks, taskId) {
  return tasks.filter((task) => task.id !== taskId)
}

export function filterTasks(tasks, filter) {
  if (filter === 'pending') {
    return tasks.filter((task) => !task.completed)
  }

  if (filter === 'completed') {
    return tasks.filter((task) => task.completed)
  }

  return tasks.filter((task) => task.schedule === 'today')
}

export function getTaskStats(tasks) {
  const total = tasks.length
  const completed = tasks.reduce(
    (count, task) => count + Number(task.completed),
    0,
  )

  return {
    total,
    completed,
    pending: total - completed,
    today: tasks.filter((task) => task.schedule === 'today').length,
    percentage: total === 0 ? 0 : Math.round((completed / total) * 100),
  }
}

export function serializeTasks(tasks) {
  return JSON.stringify({ version: STORAGE_VERSION, tasks })
}

export function parseStoredTasks(rawValue, fallbackTasks) {
  if (!rawValue) {
    return fallbackTasks
  }

  try {
    const parsed = JSON.parse(rawValue)

    if (parsed.version !== STORAGE_VERSION || !Array.isArray(parsed.tasks)) {
      return fallbackTasks
    }

    const validTasks = parsed.tasks.filter(isStoredTask)
    return validTasks.length === parsed.tasks.length ? validTasks : fallbackTasks
  } catch {
    return fallbackTasks
  }
}

function isStoredTask(task) {
  return (
    task &&
    typeof task.id === 'string' &&
    typeof task.title === 'string' &&
    task.title.trim().length > 0 &&
    typeof task.completed === 'boolean' &&
    validPriorities.has(task.priority) &&
    validSchedules.has(task.schedule)
  )
}
