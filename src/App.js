import React, { Fragment } from 'react';
import './App.css';
import TaskList from './TaskList';
import { TASKS } from './data';
import TaskInput from './TaskInput';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<h1>Tasks</h1>
				<TaskInput />
				<TaskList data={TASKS} />
			</Fragment>
		);
	}
}

export default App;
