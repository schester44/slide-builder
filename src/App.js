import React from "react"
import { withFirebase } from "./firebase"
import { IconContext } from "react-icons"

import ActionBar from "./components/ActionBar/ActionBar"
import Sidebar from "./components/Sidebar/Sidebar"
import Designer from "./components/Designer/Designer"

const App = ({ firebase }) => {
	const [state, setState] = React.useState({
		activeElem: undefined,
		elements: [
			{
				id: "3525",
				type: "text",
				style: {
					fontSize: 32,
					fontFamily: "Helvetica"
				},
				html: "draggable text",
				top: 350,
				left: 33
			},
			{
				id: "35225",
				type: "image",
				asset: {
					url: "http://placehold.it/200x200"
				},
				rotation: 45,
				left: 50,
				top: 100,
				width: 100,
				height: 300
			}
		]
	})

	const handleElemClick = activeElem => {
		setState(prevState => ({ ...prevState, activeElem }))
	}

	const handlePropChange = changes => {
		setState(prevState => ({
			...prevState,
			elements: prevState.elements.map(elem => (elem.id === state.activeElem.id ? { ...elem, ...changes } : elem))
		}))
	}

	const handleDelete = () => {
		setState(prevState => ({
			...prevState,
			elements: prevState.elements.filter(({ id }) => id !== prevState.activeElem.id)
		}))
	}

	console.log(state.activeElem)

	return (
		<IconContext.Provider value={{ color: "#0e1318", size: "1.4rem" }}>
			<div style={{ display: "flex", height: "100%", width: "100%" }}>
				<Sidebar />
				<div className="App" style={{ width: "100%" }}>
					<ActionBar onDelete={handleDelete} activeElem={state.activeElem} onPropChange={handlePropChange} />

					<Designer elements={state.elements} setActiveElem={handleElemClick} activeElem={state.activeElem} />
				</div>
			</div>
		</IconContext.Provider>
	)
}

export default withFirebase(App)
