// kanban stages : {to-do,doing,done}
export const STAGES = { TO_DO: 'to-do', DOING: 'doing', DONE: 'done' }

//prioritize using Urg/Imp matrix : {Q1,Q2,Q3,Q4}
// Q1 = Urg/Imp (quadrant of necessity)
// Q2 = !Urg/Imp (quadrant of quality)
// Q3 = Urg/!Imp (quadrant of deception)
// Q4 = !Urg/!Imp (quadrant of waste)

export const URG_IMP = { Q1: 'q1', Q2: 'q2', Q3: 'q3', Q4: 'q4' }

export let TASKS = [
	{
		id: 1,
		title: 'Task1',
		desc: 'complete task1',
		priority: URG_IMP.Q1,
		stage: STAGES.DOING,
		duration: ''
	},
	{
		id: 2,
		title: 'Task2',
		desc: 'complete task2',
		priority: URG_IMP.Q2,
		stage: STAGES.DOING,
		duration: ''
	},
	{
		id: 3,
		title: 'Task3',
		desc: 'complete task3',
		priority: URG_IMP.Q3,
		stage: STAGES.DONE,
		duration: ''
	},
	{
		id: 4,
		title: 'Task4',
		desc: 'complete task4',
		priority: URG_IMP.Q4,
		stage: STAGES.TO_DO,
		duration: ''
	}
]
