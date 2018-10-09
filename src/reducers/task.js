import STAGE from '../constants/stages'
import { ADD_TASK, DONE_TASK } from '../constants/actionTypes'
const task = (state = {}, action) => {
	switch (action.type) {
	case ADD_TASK:
		return {
			id: action.id,
			title: action.title,
			date: action.date,
			priority: action.priority,
			stage: STAGE.DOING
		}
	case DONE_TASK:
		return { ...state, stage: STAGE.DONE }
	default:
		return state
	}
}
export default task
