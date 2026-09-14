import { Icon } from './Icon.jsx'

const filters = [
  { id: 'today', label: 'Hoje', icon: 'sun', countKey: 'today' },
  { id: 'pending', label: 'Pendentes', icon: 'clock', countKey: 'pending' },
  { id: 'completed', label: 'Concluídas', icon: 'check', countKey: 'completed' },
]

export function FilterRail({ activeFilter, counts, onFilterChange }) {
  return (
    <aside className="filter-rail" aria-label="Filtros de tarefas">
      <nav className="filter-list">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id

          return (
            <button
              aria-pressed={isActive}
              className="filter-button"
              data-active={isActive}
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              type="button"
            >
              <Icon name={filter.icon} size={21} />
              <span>{filter.label}</span>
              <span className="filter-count">{counts[filter.countKey]}</span>
            </button>
          )
        })}
      </nav>

      <p className="storage-note">
        <Icon name="device" size={17} />
        Salvo neste dispositivo
      </p>
    </aside>
  )
}
