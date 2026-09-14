import test from 'node:test'
import assert from 'node:assert/strict'
import {
  createTask,
  filterTasks,
  getTaskStats,
  parseStoredTasks,
  removeTask,
  renameTask,
  serializeTasks,
  toggleTask,
} from '../src/lib/tasks.js'

const sampleTasks = [
  {
    id: 'one',
    title: 'Primeira tarefa',
    priority: 'high',
    schedule: 'today',
    completed: false,
  },
  {
    id: 'two',
    title: 'Segunda tarefa',
    priority: 'low',
    schedule: 'today',
    completed: true,
  },
]

test('createTask normaliza o título e cria uma tarefa pendente para hoje', () => {
  const task = createTask('  Preparar entrega  ', 'high', () => 'fixed-id')

  assert.deepEqual(task, {
    id: 'fixed-id',
    title: 'Preparar entrega',
    priority: 'high',
    schedule: 'today',
    completed: false,
  })
})

test('createTask rejeita títulos vazios e corrige prioridades desconhecidas', () => {
  assert.throws(() => createTask('   '), /título/)
  assert.equal(createTask('Teste', 'urgent', () => 'id').priority, 'medium')
})

test('toggleTask altera somente a tarefa selecionada sem mutar a lista original', () => {
  const result = toggleTask(sampleTasks, 'one')

  assert.equal(result[0].completed, true)
  assert.equal(result[1], sampleTasks[1])
  assert.equal(sampleTasks[0].completed, false)
})

test('renameTask ignora nome vazio e remove espaços de um nome válido', () => {
  assert.equal(renameTask(sampleTasks, 'one', '   '), sampleTasks)
  assert.equal(renameTask(sampleTasks, 'one', '  Novo título ')[0].title, 'Novo título')
})

test('removeTask elimina somente o item informado', () => {
  assert.deepEqual(removeTask(sampleTasks, 'one'), [sampleTasks[1]])
})

test('filterTasks separa tarefas pendentes, concluídas e de hoje', () => {
  assert.deepEqual(filterTasks(sampleTasks, 'pending'), [sampleTasks[0]])
  assert.deepEqual(filterTasks(sampleTasks, 'completed'), [sampleTasks[1]])
  assert.equal(filterTasks(sampleTasks, 'today').length, 2)
})

test('getTaskStats calcula contagens e percentual a partir dos dados reais', () => {
  assert.deepEqual(getTaskStats(sampleTasks), {
    total: 2,
    completed: 1,
    pending: 1,
    today: 2,
    percentage: 50,
  })
  assert.equal(getTaskStats([]).percentage, 0)
})

test('armazenamento versionado restaura dados válidos e usa fallback em dados corrompidos', () => {
  const serialized = serializeTasks(sampleTasks)
  const fallback = [sampleTasks[0]]

  assert.deepEqual(parseStoredTasks(serialized, fallback), sampleTasks)
  assert.equal(parseStoredTasks('not-json', fallback), fallback)
  assert.equal(parseStoredTasks('{"version":2,"tasks":[]}', fallback), fallback)
})
