import React from 'react';
import './App.css';
import TaskList from './TaskList';
import { TASKS } from './data';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Tasks</h1>
				<TaskList data={TASKS} />
			</div>
		);
	}
}

export default App;
