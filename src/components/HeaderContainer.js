import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	height: 43px;
	background-color: #fff;
	top: 0;
	position: fixed;
	z-index: 200;
	width: 100%;
	border-bottom: solid 1px #ca2100;
	background-color: #db4c3f;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

	> h1 {
		max-width: 950px;
		height: 100%;
		margin-left: 150px;
		margin-block-start: 0px;
		margin-block-end: 0px;
	}
`;


class HeaderContainer extends React.Component {
	render() {
		return (
			<Header>
				<h1>Tasks</h1>
			</Header>
		);
	}
}

export default HeaderContainer;
