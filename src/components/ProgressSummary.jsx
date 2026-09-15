export function ProgressSummary({ stats }) {
  const summary = `${stats.completed} de ${stats.total} tarefas concluídas`

  return (
    <div className="progress-summary" aria-label={`${summary}. ${stats.percentage}%`}>
      <div className="progress-copy">
        <span>{summary}</span>
        <strong>{stats.percentage}%</strong>
      </div>
      <div
        aria-hidden="true"
        className="progress-track"
        style={{ '--progress': `${stats.percentage}%` }}
      >
        <span />
      </div>
    </div>
  )
}
