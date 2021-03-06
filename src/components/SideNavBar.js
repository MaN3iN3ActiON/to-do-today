import React from 'react'
import styled from 'styled-components'
import FilterLink from '../containers/FilterLink'

const Aside = styled.aside`
	user-select: none !important;
	float: left;
	width: 265px;
	padding-left: 30px;
	padding-top: 50px;
	position: fixed;
	overflow-x: hidden;
	overflow-y: hidden;
	border-right: 1px solid #f1f1f1;

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
`

const SideNavBar = () => (
	<Aside>
		<nav>
			<ul>
				<li>
					<FilterLink filter='done'>Done</FilterLink>
				</li>
				<li>
					<FilterLink filter='doing'>Doing</FilterLink>
				</li>
				<li>
					<FilterLink filter='todo'>ToDo</FilterLink>
				</li>
			</ul>
		</nav>
	</Aside>
)

export default SideNavBar
