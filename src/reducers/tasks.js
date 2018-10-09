import { ADD_TASK, DONE_TASK } from '../constants/actionTypes'
import STAGE from '../constants/stages'

const tasks = (tasks = [], action) => {
	switch (action.type) {
	case DONE_TASK:
		return tasks.map(
			task => (task.id === action.id ? { ...task, stage: STAGE.DONE } : task)
		)
	case ADD_TASK:
		return [
			...tasks,
			{
				...action.task,
				stage: STAGE.DOING
			}
		]
	default:
		return tasks
	}
}

export default tasks
