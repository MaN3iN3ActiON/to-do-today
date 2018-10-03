import React from 'react'
import { TASKS } from '../data'
import TaskList from './TaskList'
import TaskInput from './TaskInput'
import styled from 'styled-components'

const Article = styled.article`
	margin-left: 284px;
	border-right: 1px solid #f1f1f1;
	min-height: 362px;
	vertical-align: top;
	width: 640px;
	padding: 6px 25px 12px 30px;
	padding-top: 80px !important;
	padding-bottom: 85px !important;
`

const TaskArticle = () => (
	<Article>
		<TaskList tasks={[...TASKS]} />
		<TaskInput />
	</Article>
)

export default TaskArticle
