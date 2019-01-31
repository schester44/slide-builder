import React from "react"
import styled from "styled-components"

import Items from "./Items"
import ElementSelector from "./ElementSelector/ElementSelector"

const Container = styled("div")`
	height: 100%;
	display: flex;
	position: relative;

	.toggle {
		position: absolute;
		top: calc(50% - 20px);
		right: -15px;
		width: 30px;
		height: 150px;
		cursor: pointer;

		span {
			position: absolute;
			top: 30%;
			right: 5px;
			color: white;
		}
	}
`

const Sidebar = () => {
	const [activePage, setActivePage] = React.useState("templates")
	const [expanded, setExpanded] = React.useState(true)

	return (
		<Container>
			<Items
				activePage={activePage}
				onClick={page => {
					setExpanded(true)
					setActivePage(page)
				}}
			/>
			{expanded && <ElementSelector />}
			{expanded && (
				<div className="toggle" onClick={() => setExpanded(false)}>
					<svg viewBox="0 0 32 112" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M22.626 17.865l-1.94-1.131C17.684 14.981 16 12.608 16 10.133V0H0v112h16v-10.135c0-2.475 1.684-4.849 4.686-6.6l1.94-1.131C28.628 90.632 32 85.885 32 80.934v-49.87c0-4.95-3.372-9.698-9.374-13.199"
							fill="#293039"
						/>
					</svg>
					<span>{"<"}</span>
				</div>
			)}
		</Container>
	)
}

export default Sidebar
