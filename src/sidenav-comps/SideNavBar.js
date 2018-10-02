import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
	list-style: none;
`;

class SideNavBar extends React.Component {
	render() {
		return (
			<aside>
				<nav>
					<Ul>
						<li>
							<a href="#today">Today</a>
						</li>
						<li>
							<a href="#7days">Next 7days</a>
						</li>
					</Ul>
				</nav>
			</aside>
		);
	}
}

export default SideNavBar;
