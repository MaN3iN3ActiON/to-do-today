import React, { Fragment } from 'react';
import './App.css';
import TaskList from './TaskList';
import { TASKS } from './data';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<h1>Tasks</h1>
				<TaskList data={TASKS} />
			</Fragment>
		);
	}
}

export default App;
