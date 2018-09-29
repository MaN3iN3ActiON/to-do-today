import React from 'react';

class SideNavBar extends React.Component {
	render() {
		return (
			<aside>
				<nav>
					<ul>
						<li>
							<a href="#today">Today</a>
						</li>
						<li>
							<a href="#7days">Next 7days</a>
						</li>
					</ul>
				</nav>
			</aside>
		);
	}
}

export default SideNavBar;
