import STAGE from '../constants/stages'
import URG_IMP from '../constants/priorities'
import { v4 } from 'node-uuid'

let tasks = [
	{
		id: v4(),
		title: 'Task1',
		priority: URG_IMP.Q1,
		stage: STAGE.DOING
	},
	{
		id: v4(),
		title: 'Task2',
		priority: URG_IMP.Q2,
		stage: STAGE.DOING
	},
	{
		id: v4(),
		title: 'Task3',
		priority: URG_IMP.Q3,
		stage: STAGE.DONE
	},
	{
		id: v4(),
		title: 'Task4',
		priority: URG_IMP.Q4,
		stage: STAGE.TO_DO
	}
]

export default { tasks }
