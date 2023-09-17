import React from "react"
import Heading from "../Heading/Heading"

import aditya from '../../../../Assets/Members/aditya.jpeg'

const projectHeadData = {
	image: aditya,
	name: "Aditya Aggarwal",
}

const ProjectHead = () => {
	return (
		<section style={{ backgroundColor: "#DDC9B4" }}>
			<div className='container-lg'>
				<div className='row justify-content-center align-items-center py-5'>
					<div className='text-center col-12 col-sm-10 col-xl-10'>
						{<Heading main='project head' />}
						<div
							className='item card border-0 col-12 py-2'
							style={{ width: 330, margin: "0 auto", backgroundColor: "#DDC9B4" }}>
							<img
								src={projectHeadData.image}
								className='rounded-circle w-75 shadow border border-gray p-1 align-self-center '
								alt={projectHeadData.name}
							/>
							<div className='card-body mt-1 text-center'>
								<p className='heading h3 text-uppercase font-weight-600 mb-3'>{projectHeadData.name}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectHead
