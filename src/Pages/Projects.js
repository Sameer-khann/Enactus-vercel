import React from "react"

import { NavBar, OngoingProjects, PastProjects } from "../components"

const navlinks = [
	{
		title: "home",
		link: "/",
	},
	{
		title: "store",
		link: "https://darpan.enactusadgitm.in",
		target: "blank",
	},
	{
		title: "projects",
		link: "/projects",
	},
	{
		title: "contact",
		link: "#contact-form",
	}
]

const Projects = () => {
	return (
		<React.Fragment>
		<NavBar items={navlinks} />
		<div className='safe-space'>
			<OngoingProjects />
			<PastProjects />
		</div>
		</React.Fragment>
	)
}
export default Projects
