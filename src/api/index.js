import FakeDB from './sampleData'
import STAGE from '../constants/stages'
import { v4 } from 'node-uuid'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms), undefined)

export const fetchTasks = filter =>
	delay(1000).then(() => {
		if (Math.random() > 0.5) throw new Error('errororo!')
		switch (filter) {
		case 'doing':
			return FakeDB.tasks.filter(t => t.stage === STAGE.DOING)
		case 'done':
			return FakeDB.tasks.filter(t => t.stage === STAGE.DONE)
		case 'todo':
			return FakeDB.tasks.filter(t => t.stage === STAGE.TO_DO)
		default:
			throw new Error(`Unknown filter:${filter}`)
		}
	})

export const addTask = task =>
	delay(1000).then(() => {
		const newTask = {
			id: v4(),
			stage: STAGE.DOING,
			...task
		}
		FakeDB.tasks.push(newTask)
		return newTask
	})

export const doneTask = id =>
	delay(1000).then(() => {
		for (let t of FakeDB.tasks) {
			if (t.id === id) {
				t.stage = STAGE.DONE
				return t
			}
		}
		throw new Error('NO Task with such ID')
	})
