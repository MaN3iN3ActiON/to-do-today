import React, { Fragment } from 'react';
import './App.css';
import Header from './header-comps/Header';
import SideNavBar from './sidenav-comps/SideNavBar';
import TaskArticle from './task-comps/TaskArticle';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Header />
				<main>
					<SideNavBar />
					<TaskArticle />
				</main>
			</Fragment>
		);
	}
}

export default App;
