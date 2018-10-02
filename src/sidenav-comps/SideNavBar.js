import React from 'react';
import styled from 'styled-components';

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
`;

const Ul = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

class SideNavBar extends React.Component {
	render() {
		return (
			<Aside>
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
			</Aside>
		);
	}
}

export default SideNavBar;
