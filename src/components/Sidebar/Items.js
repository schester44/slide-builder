import React from "react"
import styled from "styled-components"
import { FiType, FiLayout, FiAperture } from "react-icons/fi"

export const Container = styled("div")`
	width: 70px;
	background: rgba(15, 19, 23, 1);
`

const Item = styled("div")`
	color: rgba(170, 172, 173, 1);
	font-size: 12px;
	min-height: 40px;
	width: 100%;
	padding: 10px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	flex-direction: column;

	span {
		padding-top: 5px;
	}

	&:hover {
		color: white;
	}

	${({ active }) => active && `background: rgba(43, 48, 55, 1.0);`}
`

const Items = ({ onClick, activePage }) => {
	return (
		<Container>
			<Item active={activePage === "templates"} onClick={() => onClick("templates")}>
				<FiLayout color="rgba(170, 172, 173, 1)" size="25px" />
				<span>Templates</span>
			</Item>
			<Item active={activePage === "text"} onClick={() => onClick("text")}>
				<FiType color="rgba(170, 172, 173, 1)" size="25px" />
				<span>Text</span>
			</Item>
			<Item active={activePage === "elements"} onClick={() => onClick("elements")}>
				<FiAperture size="25px" color="rgba(170, 172, 173, 1)" />
				<span>Elements</span>
			</Item>
		</Container>
	)
}

export default Items
