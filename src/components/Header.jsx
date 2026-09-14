import { Icon } from './Icon.jsx'

export function Header({ isFormOpen, onToggleForm }) {
  return (
    <header className="topbar">
      <a className="brand" href="#page-title" aria-label="Ritmo — início">
        Ritmo
      </a>
      <button className="primary-button" type="button" onClick={onToggleForm}>
        <Icon name={isFormOpen ? 'x' : 'plus'} size={19} />
        <span>{isFormOpen ? 'Fechar' : 'Nova tarefa'}</span>
      </button>
    </header>
  )
}
