import { DONE_TASK } from '../constants/actionTypes'
import STAGE from '../constants/stages'

const tasks = (state = [], action) => {
	switch (action.type) {
	case DONE_TASK:
		return state.map(
			task => (task.id === action.id ? { ...task, stage: STAGE.DONE } : task)
		)
	default:
		return state
	}
}

export default tasks