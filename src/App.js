import React from 'react';
import './App.css';
import TaskList from './TaskList';

const STAGES = { TBD: 'to be decided', ONGOING: 'ongoing', COMPLETE: 'completed' };
const TASKS = [
	{ id: 1, desc: 'complete task1', stage: STAGES.ONGOING },
	{ id: 2, desc: 'complete task2', stage: STAGES.ONGOING },
	{ id: 3, desc: 'complete task3', stage: STAGES.COMPLETE },
	{ id: 4, desc: 'complete task4', stage: STAGES.TBD }
];

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
