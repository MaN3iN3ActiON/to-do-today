//import SampleData from './sampleData'

// if there is no state in localstorage, load from initialstate
export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state')
		if (serializedState === null) return undefined
		return JSON.parse(serializedState)
	} catch (err) {
		return undefined
	}
}
// state must be serializable
export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch (error) {
		// ignore write errors
	}
}
