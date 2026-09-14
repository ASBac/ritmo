import { Icon } from './Icon.jsx'

export function Header({ isFormOpen, onToggleForm }) {
  return (
    <header className="topbar">
      <a className="brand" href="#page-title" aria-label="Ritmo — início">
        Ritmo
      </a>
      <button
        aria-controls="task-form"
        aria-expanded={isFormOpen}
        className="primary-button"
        type="button"
        onClick={onToggleForm}
      >
        <Icon name="plus" size={19} />
        <span>Nova tarefa</span>
      </button>
    </header>
  )
}
