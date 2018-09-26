import React from 'react';
import PropTypes from 'prop-types';

function Task(props) {
	return (
		<li>
			<em>{props.task.title} </em>
			{props.task.stage}
		</li>
	);
}

Task.propTypes = {
	task: PropTypes.object
};

export default Task;
