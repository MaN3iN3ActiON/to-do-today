import { ADD_TASK, DONE_TASK, RECIEVE_TASKS } from '../constants/actionTypes'
import URG_IMP from '../constants/priorities'
import { v4 } from 'node-uuid'

//action-creators
export const addTask = ({ title = 'Test', date, priority = URG_IMP.Q1 }) => ({
	type: ADD_TASK,
	id: v4(),
	title,
	date,
	priority
})

export const doneTask = id => ({
	type: DONE_TASK,
	id
})

export const recieveTasks = (filter,response) => ({
	type: RECIEVE_TASKS,
	filter,
	response
})
