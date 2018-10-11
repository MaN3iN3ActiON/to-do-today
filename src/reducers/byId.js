import * as actionType from '../constants/actionTypes'

const byId = (state = {}, action) => {
	const nextState = { ...state }
	switch (action.type) {
	case actionType.FETCH_TASKS_SUCCESS:
		action.response.forEach(t => (nextState[t.id] = t))
		return nextState
	default:
		return state
	}
}

export default byId

export const getTask = (state,id) => state[id]