import STAGE from './constants/stages'
import URG_IMP from './constants/priorities'

let tasks = [
	{
		id: 1,
		title: 'Task1',
		desc: 'complete task1',
		priority: URG_IMP.Q1,
		stage: STAGE.DOING
	},
	{
		id: 2,
		title: 'Task2',
		desc: 'complete task2',
		priority: URG_IMP.Q2,
		stage: STAGE.DOING
	},
	{
		id: 3,
		title: 'Task3',
		desc: 'complete task3',
		priority: URG_IMP.Q3,
		stage: STAGE.DONE
	},
	{
		id: 4,
		title: 'Task4',
		desc: 'complete task4',
		priority: URG_IMP.Q4,
		stage: STAGE.TO_DO
	}
]

export default { tasks }
