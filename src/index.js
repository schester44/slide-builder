import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import Firebase from "./firebase"
import "./index.css"

ReactDOM.render(
	<Firebase>
		<App />
	</Firebase>,
	document.getElementById("root")
)
