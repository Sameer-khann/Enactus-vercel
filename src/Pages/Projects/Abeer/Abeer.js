import React from "react"

import Hero from "./Hero/Hero"
import Community from "./Community/Community"
import Ingredients from "./Ingredients/Ingredients"
import Objective from "./Objective/Objective"
import ProjectHead from "./ProjectHead/ProjectHead"
import { NavBar } from "../../../components"

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
]

export default function Abeer() {
	return (
		<>	
			<NavBar items={navlinks} />
			<div className='container-fluid px-0'>
			  <Hero />
			  <Community />
			  <Ingredients />
			  <Objective />
			  <ProjectHead />
		  </div>
		</>
	)
}
