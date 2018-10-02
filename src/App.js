import React, { Fragment } from 'react';
import './App.css';
import HeaderContainer from './header-comps/HeaderContainer';
import SideNavBar from './sidenav-comps/SideNavBar';
import TaskArticle from './task-comps/TaskArticle';
import styled from 'styled-components';

const Main = styled.main`
	margin-left: 150px;
	max-width: 950px;
`;

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<HeaderContainer />
				<Main>
					<SideNavBar />
					<TaskArticle />
				</Main>
			</Fragment>
		);
	}
}

export default App;
