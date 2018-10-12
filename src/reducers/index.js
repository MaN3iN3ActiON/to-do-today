import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

const listByFilter = combineReducers({
	doing: createList('doing'),
	done: createList('done'),
	todo: createList('todo')
})
const tasks = combineReducers({
	byId,
	listByFilter
})

export default tasks
// default export is always the reducer
// named exports are selectors(prepares data to displayed by ui from the current state)
export const getVisibleTasks = (state, filter) => {
	const ids = fromList.getIds(state.listByFilter[filter])
	return ids.map(id => fromById.getTask(state.byId, id))
}
export const getIsFetching = (state, filter) => {
	return fromList.getIsFetching(state.listByFilter[filter])
}
export const getErrorMessage = (state,filter) => {
	return fromList.getErrorMessage(state.listByFilter[filter])
}
