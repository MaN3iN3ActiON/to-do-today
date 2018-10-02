import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
	list-style: none;
`;

class TaskList extends React.Component {
	render() {
		const taskList = this.props.data.map(task => (
			<Task key={task.id} task={task} />
		));
		return (
			<section>
				<h3>Today</h3>
				<Ul>{taskList}</Ul>
			</section>
		);
	}
}

TaskList.propTypes = {
	data: PropTypes.array
};

export default TaskList;
