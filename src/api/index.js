import FakeDB from './sampleData'
import STAGE from '../constants/stages'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms), undefined)

export const fetchTasks = filter =>
	delay(500).then(() => {
		switch (filter) {
		case 'doing':
			return FakeDB.tasks.filter(t => (t.stage = STAGE.DOING))
		case 'done':
			return FakeDB.tasks.filter(t => (t.stage = STAGE.DONE))
		case 'todo':
			return FakeDB.tasks.filter(t => (t.stage = STAGE.TO_DO))
		default:
			throw new Error(`Unknown filter:${filter}`)
		}
	})
