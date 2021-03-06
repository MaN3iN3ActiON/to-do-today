import React from 'react'
import VisibleTaskList from '../containers/VisibleTaskList'
import TaskInput from '../containers/TaskInput'
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
		<VisibleTaskList/>
		<TaskInput />
	</Article>
)

export default TaskArticle
