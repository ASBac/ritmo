import { useCallback, useEffect, useState } from 'react'
import { seedTasks } from '../data/seedTasks.js'
import {
  STORAGE_KEY,
  createTask,
  parseStoredTasks,
  removeTask,
  renameTask,
  serializeTasks,
  toggleTask,
} from '../lib/tasks.js'

function loadInitialTasks() {
  if (typeof window === 'undefined') {
    return seedTasks
  }

  return parseStoredTasks(window.localStorage.getItem(STORAGE_KEY), seedTasks)
}

export function useTasks() {
  const [tasks, setTasks] = useState(loadInitialTasks)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, serializeTasks(tasks))
  }, [tasks])

  const addTask = useCallback((title, priority) => {
    setTasks((currentTasks) => [createTask(title, priority), ...currentTasks])
  }, [])

  const completeTask = useCallback((taskId) => {
    setTasks((currentTasks) => toggleTask(currentTasks, taskId))
  }, [])

  const editTask = useCallback((taskId, title) => {
    setTasks((currentTasks) => renameTask(currentTasks, taskId, title))
  }, [])

  const deleteTask = useCallback((taskId) => {
    setTasks((currentTasks) => removeTask(currentTasks, taskId))
  }, [])

  return {
    tasks,
    addTask,
    completeTask,
    editTask,
    deleteTask,
  }
}
