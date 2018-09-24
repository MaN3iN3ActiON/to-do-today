import React from 'react';
import Task from './task';
import PropTypes from 'prop-types';

class TaskList extends React.Component {
	render() {
		const taskList = this.props.data.map(task => (
			<Task key={task.id} task={task} />
		));
		return <ul>{taskList}</ul>;
	}
}

TaskList.propTypes = {
	data: PropTypes.array
};

export default TaskList;
