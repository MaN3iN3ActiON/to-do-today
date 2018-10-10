import { createStore } from 'redux'
import rootReducer from './reducers'
//removing persisting data in localStorage
//import { loadState, saveState } from './localStorage'
//import throttle from 'lodash/throttle'

const configureStore = () => {
	//const persistedState = loadState()
	const store = createStore(
		rootReducer,
		undefined,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

	//writing to localstorage atmost once a sec
	// store.subscribe(
	// 	throttle(() => {
	// 		saveState({ tasks: store.getState().tasks })
	// 	}, 1000)
	// )
	return store
}

export default configureStore
