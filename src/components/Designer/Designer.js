import React from "react"
import styled from "styled-components"
import { Stage, Layer } from "react-konva"
import Text from "./Types/Text"
import Image from "./Types/Image"

const Container = styled("div")`
	width: 100%;
	height: calc(100% - 50px);
	display: flex;
	align-items: center;
	justify-content: center;

	.stage {
		border: 1px solid rgba(229, 229, 229, 1);
		background: white;
	}
`

const Designer = ({ setActiveElem, activeElem, elements }) => {
	return (
		<Container>
			<Stage className="stage" width={1920 / 2} height={1080 / 2}>
				<Layer>
					{elements.map(elem => {
						const Item = elem.type === "text" ? Text : Image
						return (
							<Item
								key={elem.id}
								elem={elem}
								onDragStart={() => setActiveElem(elem)}
								onClick={() => setActiveElem(elem)}
							/>
						)
					})}
				</Layer>
			</Stage>
		</Container>
	)
}

export default Designer
