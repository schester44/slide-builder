import React from "react"
import { Text } from "react-konva"

const Item = ({ elem, onDragStart, onClick }) => {
	return (
		<Text
			{...elem.style}
			onDragStart={onDragStart}
			onClick={onClick}
			draggable
			text={elem.html}
			key={elem.id}
			x={elem.left}
			y={elem.top}
		/>
	)
}

export default Item
