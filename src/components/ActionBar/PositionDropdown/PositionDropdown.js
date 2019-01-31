import React from "react"
import styled from "styled-components"
import { FiLayers, FiAlignLeft, FiAlignCenter, FiAlignRight } from "react-icons/fi"
import useOnOutsideClick from "use-onclickoutside"
export const Container = styled("div")`
	position: relative;
`

const Dropdown = styled("div")`
	background: white;
	border-radius: 4px;
	position: absolute;
	right: 0;
	top: calc(100% + 5px);
	width: 160px;
	box-shadow: 0 0 0 1px rgba(14, 19, 24, 0.07), 0 2px 12px rgba(14, 19, 24, 0.2);
	padding: 3px 0;

	.group-title {
		color: rgba(14, 19, 24, 0.45);
		margin: 8px;
		font-size: 1.2rem;
	}
`

const Item = styled("div")`
	padding: 10px;
	font-size: 1.4rem;
	color: rgba(42, 48, 56, 1);
	display: flex;
	align-items: center;

	span {
		padding-left: 10px;
	}

	&:hover {
		background-color: rgba(238, 238, 239, 1);
	}
`

const PositionDropdown = ({ trigger }) => {
	const [visible, setVisible] = React.useState(false)
	const container = React.useRef()

	useOnOutsideClick(container, () => {
		setVisible(false)
	})

	return (
		<Container ref={container}>
			{visible && (
				<Dropdown>
					<Item>
						<FiLayers /> <span>Forward</span>
					</Item>
					<Item>
						<FiLayers /> <span>Backward</span>
					</Item>
					<div className="group-title">Align to slide</div>
					<Item>Top</Item>
					<Item>Middle</Item>
					<Item>Bottom</Item>
					<Item>
						<FiAlignLeft /> <span>Left</span>
					</Item>
					<Item>
						<FiAlignCenter /> <span>Center</span>
					</Item>
					<Item>
						<FiAlignRight /> <span>Right</span>
					</Item>
				</Dropdown>
			)}

			{trigger({ visible, open: () => setVisible(true) })}
		</Container>
	)
}

export default PositionDropdown
