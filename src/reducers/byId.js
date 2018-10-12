const byId = (state = {}, action) => {
	if (action.response) {
		return { ...state, ...action.response.entities.tasks }
	}
	return state
}

export default byId

export const getTask = (state, id) => state[id]
