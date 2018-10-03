import { ADD_TASK, DONE_TASK } from '../constants/actionTypes'
import STAGE from '../constants/stages'

const tasks = (state = [], action) => {
	switch (action.type) {
	case DONE_TASK:
		return state.map(
			task => (task.id === action.id ? { ...task, stage: STAGE.DONE } : task)
		)
	case ADD_TASK:
		return [
			...state,
			{
				...action.task,
				stage: STAGE.DOING
			}
		]
	default:
		return state
	}
}

export default tasks
