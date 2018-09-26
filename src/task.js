import React from 'react';
import PropTypes from 'prop-types';

function Task(props) {
	const title = props.task.title;
	const stage = props.task.stage;
	//TODO: use CSS to space, use margin or padding
	return (
		<li>
			<strong>{title}</strong>
			<em>{stage}</em>
		</li>
	);
}

Task.propTypes = {
	task: PropTypes.object
};

export default Task;
