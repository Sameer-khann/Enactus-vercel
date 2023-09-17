import React, { useEffect } from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import { Footer } from "./components"
import { Home, Projects, Abeer, Gutargu, Mritkala } from "./Pages"

import "./App.scss"
import Astitva from "./Pages/Projects/Astitva/Astitva"

function App() {
	useEffect(() => {
		const setWindowSize = () => {
			const windowHeight = window.innerHeight
			const vh = windowHeight / 100
			document.body.style.setProperty("--vh", `${vh}px`)
			const windowWidth = window.innerWidth
			const vw = windowWidth / 100
			document.body.style.setProperty("--vw", `${vw}px`)
		}
		// calculate header height and set body padding-top
		const setBodySafeSapce = () => {
			const header = document.querySelector(".navbar")
			const headerHeight = header.getBoundingClientRect().height
			document.body.style.setProperty("--header-height", `${headerHeight}px`)
		}

		// run the function when window resizes
		window.addEventListener("resize", () => {
			setBodySafeSapce()
			setWindowSize()
		})

		// run it on load
		setBodySafeSapce()
		setWindowSize()
	}, [])

	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route path='/projects' exact component={Projects}></Route>
					<Route path='/projects/abeer' exact component={Abeer}></Route>
					<Route path='/projects/gutargu' exact component={Gutargu}></Route>
					<Route path='/projects/mritkala' exact component={Mritkala}></Route>
					<Route path='/projects/Astitva' exact component={Astitva}></Route>
					<Route path='*' exact component={Home}></Route>
				</Switch>
			</Router>
			<Footer />
		</React.Fragment>
	)
}

export default App
