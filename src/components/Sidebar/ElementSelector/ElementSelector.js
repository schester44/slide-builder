import React from "react"
import styled from "styled-components"

export const Container = styled("div")`
	width: 360px;
	background: rgba(42, 48, 56, 1);
	color: white;

	input {
		border: 0;
		border-radius: 4px;
		margin: 20px 10px;
		width: calc(100% - 20px);
		font-size: 16px;
		padding: 10px;
		outline: none;
	}
`

const ElementSelector = () => {
	return (
		<Container>
			<input type="text" placeholder="Search..." />
		</Container>
	)
}

export default ElementSelector
