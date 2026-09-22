import test from 'node:test'
import assert from 'node:assert/strict'
import {
  createTask,
  filterTasks,
  parseStoredTasks,
  removeTask,
  renameTask,
  serializeTasks,
  toggleTask,
} from '../src/lib/tasks.js'

const tasks = [
  {
    id: 'today',
    title: 'Revisar a entrega',
    priority: 'high',
    schedule: 'today',
    completed: false,
  },
  {
    id: 'later',
    title: 'Planejar a próxima etapa',
    priority: 'low',
    schedule: 'later',
    completed: true,
  },
]

test('createTask usa prioridade média quando ela não é informada', () => {
  const task = createTask('Documentar o resultado', undefined, () => 'task-id')

  assert.equal(task.priority, 'medium')
  assert.equal(task.id, 'task-id')
})

test('toggleTask preserva os dados quando o identificador não existe', () => {
  const result = toggleTask(tasks, 'missing')

  assert.deepEqual(result, tasks)
  assert.equal(result[0], tasks[0])
  assert.equal(result[1], tasks[1])
})

test('renameTask não altera outras tarefas ao receber um identificador desconhecido', () => {
  const result = renameTask(tasks, 'missing', 'Título que não deve ser aplicado')

  assert.deepEqual(result, tasks)
})

test('removeTask mantém a lista quando o identificador não existe', () => {
  assert.deepEqual(removeTask(tasks, 'missing'), tasks)
})

test('armazenamento aceita uma lista vazia válida e rejeita registros incompletos', () => {
  const fallback = [tasks[0]]
  const emptyState = serializeTasks([])
  const invalidState = JSON.stringify({
    version: 1,
    tasks: [{ id: 'invalid', title: 'Sem os demais campos' }],
  })

  assert.deepEqual(parseStoredTasks(emptyState, fallback), [])
  assert.equal(parseStoredTasks(invalidState, fallback), fallback)
})

test('filtro desconhecido usa as tarefas agendadas para hoje', () => {
  assert.deepEqual(filterTasks(tasks, 'unknown'), [tasks[0]])
})
