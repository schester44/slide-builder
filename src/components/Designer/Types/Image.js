import React from "react"
import { Image, Text } from "react-konva"

const Item = ({ elem, ...props }) => {
	return (
		<Text draggable text="im supposed to be an image but Hooks is acting up" {...props} x={elem.top} y={elem.left} />
	)
}

export default Item
