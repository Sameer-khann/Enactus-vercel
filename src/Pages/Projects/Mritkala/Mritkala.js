import React from "react"
import { NavBar } from "../../../components"
import ProjectHead from "./ProjectHead/ProjectHead"
import Involvement from "./Involvement/Involvement"
import Community from "./Community/Community"
import FeaturedProject from "./FeaturedProject/FeaturedProject"
import Hero from "./Hero/Hero"

const navlinks = [
	{
		title: "home",
		link: "/",
	},
	{
		store: "store",
		link: "https://darpan.enactusadgitm.in/",
		target: "blank",
	},
	{
		title: "projects",
		link: "/projects",
	},
]

const Mritkala = () => {
	return (
		<>
			<NavBar items={navlinks} />
			<Hero />
			<FeaturedProject />
			<Community />
			<Involvement />
			<ProjectHead />
		</>
	)
}

export default Mritkala
