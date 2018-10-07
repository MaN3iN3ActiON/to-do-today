import { SET_VISIBILITY_FILTER } from '../constants/actionTypes'
import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_DOING, action) => {
	switch (action.type) {
	case SET_VISIBILITY_FILTER:
		return action.filter
	default:
		return state
	}
}

export default visibilityFilter
