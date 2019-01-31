import React from "react"
import styled from "styled-components"
import { FiTrash2, FiAlignLeft, FiItalic, FiBold, FiSliders } from "react-icons/fi"
import PositionDropdown from "./PositionDropdown/PositionDropdown"

const Button = styled("div")`
	padding: 3px 7px;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 4px;
	margin: 0;
	cursor: pointer;
	height: 32px;
	min-width: 0;
	color: #0e1318;
	transition: background-color 0.3s ease, color 0.2s ease-out;
	justify-content: center;
	display: inline-flex;
	align-items: center;
	max-width: 100%;
	outline: none;
	letter-spacing: 0.01rem;
	line-height: 1.4;
	font-weight: 600;
	font-size: 1.4rem;

	&:hover {
		background-color: rgba(238, 238, 239, 1);
	}
`

export const Container = styled("div")`
	height: 50px;
	width: 100%;
	padding: 10px 10px 10px 25px;
	background: #fff;
	border-bottom: 1px solid rgba(204, 207, 209, 1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #0e1318;

	.primary,
	.secondary {
		display: flex;
		align-items: center;
	}
`

const TextActions = () => {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<Button>Size</Button>

			<Button>Color</Button>

			<Button>
				<FiSliders size="22px" />
			</Button>
			<Button>
				<FiBold size="22px" />
			</Button>

			<Button>
				<FiItalic size="22px" />
			</Button>
			<Button>
				<FiAlignLeft size="22px" />
			</Button>
		</div>
	)
}

const ActionBar = ({ activeElem, onPropChange, onDelete }) => {
	console.log(activeElem);
	return (
		<Container>
			{activeElem && <div className="primary">{activeElem.type === "text" && <TextActions />}</div>}
			{activeElem && (
				<div className="secondary">
					<PositionDropdown trigger={({ open }) => <Button onClick={open}>Position</Button>} />
					<Button onClick={onDelete}>
						<FiTrash2 size="22px" />
					</Button>
				</div>
			)}
		</Container>
	)
}

export default ActionBar
