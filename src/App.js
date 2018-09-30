import React, { Fragment } from 'react';
import './App.css';
import HeaderContainer from './header-comps/HeaderContainer';
import SideNavBar from './sidenav-comps/SideNavBar';
import TaskArticle from './task-comps/TaskArticle';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<HeaderContainer />
				<main>
					<SideNavBar />
					<TaskArticle />
				</main>
			</Fragment>
		);
	}
}

export default App;
