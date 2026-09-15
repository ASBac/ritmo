import { useState } from 'react'
import { Icon } from './Icon.jsx'

const priorityLabels = {
  high: 'Alta',
  medium: 'Média',
  low: 'Baixa',
}

export function TaskList({ tasks, onDelete, onEdit, onToggle }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state" role="status">
        <span className="empty-icon">
          <Icon name="check" size={22} />
        </span>
        <p>Tudo em ordem por aqui.</p>
      </div>
    )
  }

  return (
    <section className="task-list" aria-label="Lista de tarefas">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </section>
  )
}

function TaskItem({ task, onDelete, onEdit, onToggle }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draftTitle, setDraftTitle] = useState(task.title)

  function saveEdit() {
    if (draftTitle.trim()) {
      onEdit(task.id, draftTitle)
      setIsEditing(false)
    }
  }

  return (
    <article className="task-row" data-completed={task.completed}>
      <label className="task-check">
        <input
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          type="checkbox"
        />
        <span aria-hidden="true">
          {task.completed ? <Icon name="check" size={16} /> : null}
        </span>
        <span className="sr-only">
          {task.completed ? 'Marcar como pendente' : 'Marcar como concluída'}
        </span>
      </label>

      <div className="task-content">
        {isEditing ? (
          <form
            className="edit-form"
            onSubmit={(event) => {
              event.preventDefault()
              saveEdit()
            }}
          >
            <input
              aria-label="Editar título da tarefa"
              autoFocus
              onChange={(event) => setDraftTitle(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setDraftTitle(task.title)
                  setIsEditing(false)
                }
              }}
              value={draftTitle}
            />
            <button type="submit">Salvar</button>
          </form>
        ) : (
          <p className="task-title">{task.title}</p>
        )}
        <span className="task-date">
          <Icon name="calendar" size={15} />
          Hoje
        </span>
      </div>

      <span className="priority" data-priority={task.priority}>
        {priorityLabels[task.priority]}
      </span>

      <div className="task-actions">
        <button
          aria-label={`Editar ${task.title}`}
          className="icon-button"
          onClick={() => setIsEditing(true)}
          type="button"
        >
          <Icon name="edit" size={19} />
        </button>
        <button
          aria-label={`Excluir ${task.title}`}
          className="icon-button danger-button"
          onClick={() => onDelete(task.id)}
          type="button"
        >
          <Icon name="trash" size={19} />
        </button>
      </div>
    </article>
  )
}
