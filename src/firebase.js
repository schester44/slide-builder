import React from "react"

import * as firebase from "firebase"

const config = {
	apiKey: "AIzaSyBejrIJGT5YZZJp7XACJsjoLA7Ia70A2pk",
	authDomain: "glide-8ee39.firebaseapp.com",
	databaseURL: "https://glide-8ee39.firebaseio.com",
	projectId: "glide-8ee39",
	storageBucket: "glide-8ee39.appspot.com",
	messagingSenderId: "844900333421"
}

firebase.initializeApp(config)

export const FirebaseContext = React.createContext(firebase)

const FirebaseProvider = ({ children }) => {
	return <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>
}

export default FirebaseProvider

export const withFirebase = Component => {
	return props => {
		const firebase = React.useContext(FirebaseContext)
		return <Component {...props} firebase={firebase} />
	}
}
