import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/colors";

const Container = styled.header`
	height: 60px;
	background-color: ${colors.blue};
	display: flex;
	box-sizing: border-box;
	align-items: center;
`;
const Title = styled(Link)`
	flex: 1;
	color: ${colors.white};
	font-size: 20px;
	padding-left: 20px;
	text-decoration: none;
`;
const Menu = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
`;
const Item = styled(Link)`
	padding-right: 20px;
	color: ${colors.white};
	cursor: pointer;
	text-decoration: none;

	:hover {
		color: #000;
	}
`;

export class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<Container>
				<Title to="/">Boilerplate React/Mobx</Title>
				<Menu>
					<li>
						<Item to="/">Home</Item>
					</li>
					<li>
						<Item to="/about">About</Item>
					</li>
				</Menu>
			</Container>
		);
	}
}
