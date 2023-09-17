import React from "react"
import { Icon } from "@iconify/react"
import arrowRight from "@iconify-icons/mdi/arrow-bottom-right"

import featuredProjectImage from "../../Assets/featured-project-image.png"
import featuredProjectImage1 from "../../Assets/Projects/Astiitva/astitva-1.png";
import featuredProjectImage2 from "../../Assets/community3.jpg";
import featuredProjectLogo from "../../Assets/Abeerlogo.png"
import featuredProjectLogo2 from "../../Assets/MritkalaLogo.png"
import featuredProjectLogo1 from "../../Assets/logo.png"

const featuredProjectDescription = `Project Abeer is an initiative to overcome the problems caused by chemical loaded soaps, to curb the use of plastic and to concurrently generate employment for underprivileged women. We bring to you indigenous organic alternatives for chemical infused soaps, which are not only good for your skin but also for the environment.`
const featuredProjectDescription1 = `Astitva is an initiative taken to provide a platform to empower various stakeholders highly concerned about the social evils of the society. It can help in creating a sense of awareness among individuals and organizations about current challenges faced by our society. It provides an opportunity for Enactus ADGITM itself to be involved in identification of social problems at ground level.`
const featuredProjectDescription2 = `Project Mritkala, is an enterprise under Enactus ADGITM, that intends to acquaint the society with the revamped trend of pottery. Our aim is to succour the artisans who possess the artistry of moulding clay into alluring handcrafted resilient pieces of craftsmanship.`

const FeaturedProject = () => {
	return (
		<>
		<div className='featured-project container-lg my-5 pt-0'>
			<div className='heading h2 text-uppercase text-primary font-weight-600 text-center mb-4'>
				FEATURED PROJECTS
				<hr
					className='bg-primary mt-0'
					style={{ width: '4.3rem', height: ".2rem" }}
				/>
			</div>
			{/* <div className='featured-project-content row justify-content-center align-items-center'>
				<div className='featured-project-image col-12 col-sm-7 mb-3 mb-md-0 col-md-5 col-lg-4 col-xl-3 p-lg-3 p-xl-2'>
					<img
						src={featuredProjectImage}
						className='w-100 shadow-lg'
						alt='featured project'
					/>
				</div>
				<div className='featured-project-content-content col-12 col-sm-10 col-md-6 col-xl-7 ml-lg-2 ml-xl-4'>
					<p className='project-heading h1 text-center text-md-left font-weight-bolder mb-md-3'>
						Project Abeer
					</p>
					<p className='project-content text-justify font-weight-light text-md-left'>
						{featuredProjectDescription}
						<img
							className='featured-project-logo position-absolute'
							style={{
								maxWidth: "80%",
								maxHeight: "80%",
								position: "absolute",
								opacity: 0.2,
								top: "50%",
								left: "50%",
								transform: "translate(-50%,-50%)",
								zIndex: -1,
							}}
							src={featuredProjectLogo}
							alt='featured project logo'
						/>
					</p>
					<a
						href='/projects/abeer'
						className='text-uppercase text-primary h4 font-weight-bolder mt-md-3'
						role='button'>
						Know more
						<Icon
							color='black'
							width='1.7rem'
							className='bg-primary rounded-circle align-self-center ml-3'
							style={{ transform: "rotateZ(-45deg)scale(1.2)" }}
							icon={arrowRight}
						/>
					</a>
				</div>
			</div> */}
			<div className='featured-project-content row justify-content-center align-items-center'>
				<div className='featured-project-image col-12 col-sm-7 mb-3 mb-md-0 col-md-5 col-lg-4 col-xl-3 p-lg-3 p-xl-2'>
					<img
						src={featuredProjectImage1}
						className='w-100 shadow-lg'
						alt='featured project'
					/>
				</div>
				<div className='featured-project-content-content col-12 col-sm-10 col-md-6 col-xl-7 ml-lg-2 ml-xl-4'>
					<p className='project-heading h1 text-center text-md-left font-weight-bolder mb-md-3'>
						Initiative Astitva
					</p>
					<p className='project-content text-justify font-weight-light text-md-left'>
						{featuredProjectDescription1}
						<img
							className='featured-project-logo position-absolute'
							style={{
								maxWidth: "80%",
								maxHeight: "80%",
								position: "absolute",
								opacity: 0.2,
								top: "50%",
								left: "50%",
								transform: "translate(-50%,-50%)",
								zIndex: -1,
							}}
							src={featuredProjectLogo1}
							alt='featured project logo'
						/>
					</p>
					<a
						href='/projects/astitva'
						className='text-uppercase text-primary h4 font-weight-bolder mt-md-3'
						role='button'>
						Know more
						<Icon
							color='black'
							width='1.7rem'
							className='bg-primary rounded-circle align-self-center ml-3'
							style={{ transform: "rotateZ(-45deg)scale(1.2)" }}
							icon={arrowRight}
						/>
					</a>
				</div>
			</div>
			<div className='featured-project-content row justify-content-center align-items-center'>
				<div className='featured-project-image col-12 col-sm-7 mb-3 mb-md-0 col-md-5 col-lg-4 col-xl-3 p-lg-3 p-xl-2'>
					<img
						src={featuredProjectImage2}
						className='w-100 shadow-lg'
						alt='featured project'
					/>
				</div>
				<div className='featured-project-content-content col-12 col-sm-10 col-md-6 col-xl-7 ml-lg-2 ml-xl-4'>
					<p className='project-heading h1 text-center text-md-left font-weight-bolder mb-md-3'>
						Project Mritkala
					</p>
					<p className='project-content text-justify font-weight-light text-md-left'>
						{featuredProjectDescription2}
						<img
							className='featured-project-logo position-absolute'
							style={{
								maxWidth: "80%",
								maxHeight: "80%",
								position: "absolute",
								opacity: 0.2,
								top: "50%",
								left: "50%",
								transform: "translate(-50%,-50%)",
								zIndex: -1,
							}}
							src={featuredProjectLogo2}
							alt='featured project logo'
						/>
					</p>
					<a
						href='/projects/mritkala'
						className='text-uppercase text-primary h4 font-weight-bolder mt-md-3'
						role='button'>
						Know more
						<Icon
							color='black'
							width='1.7rem'
							className='bg-primary rounded-circle align-self-center ml-3'
							style={{ transform: "rotateZ(-45deg)scale(1.2)" }}
							icon={arrowRight}
						/>
					</a>
				</div>
			</div>
		</div>
		<div style={{textAlign: 'center'}}>
		<a
						href='/projects'
						className='text-uppercase text-primary h4 font-weight-bolder'
						role='button'>
						Click here to check out more projects
						<Icon
							color='black'
							width='1.7rem'
							className='bg-primary rounded-circle align-self-center ml-3'
							style={{ transform: "rotateZ(-45deg)scale(1.2)" }}
							icon={arrowRight}
						/>
					</a>
		</div>
		</>
	)
}

export default FeaturedProject
