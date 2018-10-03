import { ADD_TASK, DONE_TASK } from '../constants/actionTypes'
import STAGE from '../constants/stages'

let taskId = 0

//action-creators
export const addTask = ({ title, desc, priority }) => ({
	type: ADD_TASK,
	task: {
		id: taskId++,
		title,
		desc,
		priority,
		stage: STAGE.DOING
	}
})

export const doneTask = ({ id }) => {
	return {
		type: DONE_TASK,
		id
	}
}
