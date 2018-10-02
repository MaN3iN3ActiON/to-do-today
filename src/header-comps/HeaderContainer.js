import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	background-color: #aeb;
	top: 0;
	position: fixed;
	z-index: 200;
	width: 100%;
`;

const H1 = styled.h1`
	/* margin-top: 2px;
	padding: 5px;
	margin-bottom: 0px; */
`;

class HeaderContainer extends React.Component {
	render() {
		return (
			<Header>
				<H1>Tasks</H1>
			</Header>
		);
	}
}

export default HeaderContainer;
