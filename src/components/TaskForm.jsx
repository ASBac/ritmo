import { useId, useState } from 'react'

export function TaskForm({ onAddTask }) {
  const titleId = useId()
  const priorityId = useId()
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim()) {
      setError('Digite uma tarefa antes de adicionar.')
      return
    }

    onAddTask(title, priority)
    setTitle('')
    setPriority('medium')
    setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="field field-grow">
        <label htmlFor={titleId}>O que precisa ser feito?</label>
        <input
          autoFocus
          id={titleId}
          onChange={(event) => {
            setTitle(event.target.value)
            if (error) setError('')
          }}
          placeholder="O que precisa ser feito?"
          type="text"
          value={title}
        />
      </div>

      <div className="field priority-field">
        <label htmlFor={priorityId}>Prioridade</label>
        <select
          id={priorityId}
          onChange={(event) => setPriority(event.target.value)}
          value={priority}
        >
          <option value="high">Alta</option>
          <option value="medium">Média</option>
          <option value="low">Baixa</option>
        </select>
      </div>

      <button className="primary-button add-button" type="submit">
        Adicionar tarefa
      </button>

      <p aria-live="polite" className="form-error">
        {error}
      </p>
    </form>
  )
}
