import {
	ADD_TASK,
	DONE_TASK
} from '../constants/actionTypes'
import URG_IMP from '../constants/priorities'
import { v4 } from 'node-uuid'

//action-creators
export const addTask = ({
	title = 'Test',
	desc = 'test',
	priority = URG_IMP.Q1
}) => ({
	type: ADD_TASK,
	task: {
		id: v4(),
		title,
		desc,
		priority
	}
})

export const doneTask = (id) => ({
	type: DONE_TASK,
	id
})
