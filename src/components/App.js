import React, { Fragment } from 'react'
import './App.css'
import HeaderComponent from './Header'
import SideNavBar from './SideNavBar'
import TaskArticle from './TaskArticle'
import styled from 'styled-components'

const Main = styled.main`
	margin-left: 150px;
	max-width: 950px;
`

const App = () => {
	return (
		<Fragment>
			<HeaderComponent />
			<Main>
				<SideNavBar />
				<TaskArticle />
			</Main>
		</Fragment>
	)
}

export default App
