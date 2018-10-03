import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
// import { loadState, saveState } from './localStorage'
import InitialState from './data'
//const persistedState = loadState()
const store = createStore(rootReducer, InitialState)

store.subscribe(() => {
	console.log('initial state' + store.getState())
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
