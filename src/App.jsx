import { useMemo, useState } from 'react'
import { FilterRail } from './components/FilterRail.jsx'
import { Header } from './components/Header.jsx'
import { ProgressSummary } from './components/ProgressSummary.jsx'
import { TaskForm } from './components/TaskForm.jsx'
import { TaskList } from './components/TaskList.jsx'
import { useTasks } from './hooks/useTasks.js'
import { filterTasks, getTaskStats } from './lib/tasks.js'
import './styles.css'

export default function App() {
  const [filter, setFilter] = useState('today')
  const [isFormOpen, setIsFormOpen] = useState(true)
  const { tasks, addTask, completeTask, editTask, deleteTask } = useTasks()

  const stats = useMemo(() => getTaskStats(tasks), [tasks])
  const visibleTasks = useMemo(
    () => filterTasks(tasks, filter),
    [filter, tasks],
  )

  function handleAddTask(title, priority) {
    addTask(title, priority)
    setFilter('today')
  }

  return (
    <div className="app-shell">
      <Header
        isFormOpen={isFormOpen}
        onToggleForm={() => setIsFormOpen((isOpen) => !isOpen)}
      />

      <div className="app-layout">
        <FilterRail
          activeFilter={filter}
          counts={stats}
          onFilterChange={setFilter}
        />

        <main className="workspace">
          <section className="workspace-intro" aria-labelledby="page-title">
            <div>
              <h1 id="page-title">Organize o que importa hoje</h1>
              <p>Transforme prioridades em um plano claro e possível.</p>
            </div>
            <ProgressSummary stats={stats} />
          </section>

          {isFormOpen ? <TaskForm onAddTask={handleAddTask} /> : null}

          <TaskList
            tasks={visibleTasks}
            onDelete={deleteTask}
            onEdit={editTask}
            onToggle={completeTask}
          />
        </main>
      </div>
    </div>
  )
}
