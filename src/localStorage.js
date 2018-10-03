import InitialState from './initialState'

// if there is no state in localstorage, load from initialstate
export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state')
		if (serializedState === null) return InitialState
		return JSON.parse(serializedState)
	} catch (err) {
		return undefined
	}
}
export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state',serializedState)
	} catch (error) {
		// ignore write errors
	}
}