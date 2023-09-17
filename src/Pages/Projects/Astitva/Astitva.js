import React from "react"
import NavBar from "../../../components/NavBar/NavBar"
import paridhi from "../../../Assets/Members/Member10.png"
import ishika from "../../../Assets/Members/Member17.png"
import arrowRight from "@iconify-icons/mdi/arrow-bottom-right"
import logo from "../../../Assets/logo.png"
import Icon from "@iconify/react"

const navlinks = [
	{
		title: "home",
		link: "/",
	},
	{
		title: "About",
		link: "#about",
	},
	{
		title: "Projects",
		link: "#projects",
	},
	{
		title: "Heads",
		link: "#heads",
	},
]

function Astitva() {
	return (
		<React.Fragment>
			<NavBar items={navlinks} />
			<div className='mainPage container safe-space d-flex flex-column justify-content-center align-items-center'>
				<div className='logo col-8 col-sm-6 col-md-4 col-lg-3'>
					<img src={logo} alt='' className='w-100 h-auto'></img>
				</div>
				<div className='aboutAstitva text-center' id='about'>
					<p className='text-capitalize font-weight-bolder m-0'>welcome to</p>
					<p className='display-4' style={{ color: "#00525E" }}>
						INITIATIVE ASTITVA
					</p>
					<p className='astitva-content'>
						Astitva is an initiative taken to provide a platform to empower various stakeholders highly
						concerned about the social evils of the society. It can help in creating a sense of awareness
						among individuals and organizations about current challenges faced by our society. It provides
						an opportunity for Enactus ADGITM itself to be involved in identification of social problems at
						ground level. It is an umbrella project with various sub - projects :
					</p>
				</div>

				<div className='projects text-center row justify-content-center' id='projects'>
					<div className='gutarguu card shadow col-lg-3 mx-lg-3'>
						<div className='card-body'>
							<h4>GUTARGU</h4>
							<p>
								Gutargu is a social awareness publication which enlightens the reader about the uprising
								social stigmas and initiatives taken by the government and individuals to encounter
								them.
							</p>

							<a
								href='/projects/gutargu'
								className='stretched-link h5'
								style={{ textDecoration: "underline" }}>
								check it out
								<Icon
									color='white'
									width='1.5rem'
									className='rounded-circle align-self-center ml-3'
									style={{
										transform: "rotateZ(-45deg)scale(1.2)",
										background: "#00525E",
									}}
									icon={arrowRight}
								/>
							</a>
						</div>
					</div>

					<div className='darpan card shadow col-lg-4 mx-lg-3'>
						<div className='card-body'>
							<h4>DARPAN</h4>
							<p>
								It is an online store which aims to provide a platform to all the new emerging product-
								based plans to market their items. Through Darpan, we aim showcase our recent product-
								based projects and collaborate with different organizations and Enactus to offer them
								with opportunity to display their produces online.
							</p>
							<a
								href='https://darpan.enactusadgitm.in'
								target='blank'
								className='stretched-link h5'
								style={{ textDecoration: "underline" }}>
								check it out
								<Icon
									color='white'
									width='1.5rem'
									className='rounded-circle align-self-center ml-3'
									style={{
										transform: "rotateZ(-45deg)scale(1.2)",
										background: "#00525E",
									}}
									icon={arrowRight}
								/>
							</a>
						</div>
					</div>

					<div className='dhairyam card shadow col-lg-3 mx-lg-3'>
						<div className='card-body'>
							<h4>DHAIRYAM</h4>

							<p>
								It is anonymous exchange platform designed to provide space to vent your innermost
								feelings, emotions and thoughts while seeking guidance and support from total strangers
								who have tackled similar circumstances.
							</p>

							<h5 style={{ color: "#00525E" }}>coming soon</h5>
						</div>
					</div>
				</div>
			</div>
			<div className='container-fluid bg-primary-lighter mt-5 text-center' id='heads'>
				<div className='intro pt-4'>
					<p className='text-capitalize font-weight-bolder m-0'>project heads</p>
					<p className='display-4' style={{ color: "#00525E" }}>
						PILLARS OF ASTITVA
					</p>
				</div>

				<div className='row justify-content-center align-items-center'>
					<div className='card bg-transparent border-0 align-items-center col-12 col-sm-6 col-md-6 col-lg-4'>
						<img src={ishika} alt='' className='card-img-top rounded-circle w-50'></img>
						<div className='card-body'>
							<p className='card-title h3'>Ishika Khurana</p>
						</div>
					</div>
					<div className='card bg-transparent border-0 align-items-center col-12 col-sm-6 col-md-6 col-lg-4'>
						<img src={paridhi} alt='' className='card-img-top rounded-circle w-50'></img>
						<div className='card-body'>
							<p className='card-title h3'>Paridhi Sharma</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Astitva
