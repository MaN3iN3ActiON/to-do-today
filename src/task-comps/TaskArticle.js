import React from 'react';

import { TASKS } from '../data';

import TaskList from './TaskList';
import TaskInput from './TaskInput';

class TaskArticle extends React.Component {
	render() {
		return (
			<article>
				<TaskList data={TASKS} />
				<TaskInput />
			</article>
		);
	}
}

export default TaskArticle;
