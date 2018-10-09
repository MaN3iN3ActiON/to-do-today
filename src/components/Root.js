import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//todo: can filter be optional if so then what happens
const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Route path="/:filter" component={App} />
		</Router>
	</Provider>
)
Root.propTypes = {
	store: PropTypes.object
}
export default Root
