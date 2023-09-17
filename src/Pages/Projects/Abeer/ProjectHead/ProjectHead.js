import React from "react"

import Heading from '../Heading/Heading'


import simran from '../../../../Assets/Members/simran.jpeg'
import tushar from '../../../../Assets/Members/tushar.jpeg'



const ProjectHead = () => {

	return (
		<div className='container-lg'>
			<div className='our-mission row justify-content-center align-items-center py-5'>
				<div className='our-mission-inner text-center col-12 col-sm-10 col-xl-10'>
					<Heading main='project head' />
					<div className='row justify-content-center align-items-center'>
					<div className='card bg-transparent border-0 align-items-center col-12 col-sm-6 col-md-6 col-lg-4'>
						<img src={simran} alt='' className='rounded-circle w-75 shadow border border-gray p-1 align-self-center '></img>
						<div className='card-body'>
							<p className='card-title h3'>Simran</p>
						</div>
					</div>
					<div className='card bg-transparent border-0 align-items-center col-12 col-sm-6 col-md-6 col-lg-4'>
						<img src={tushar} alt='' className='rounded-circle w-75 shadow border border-gray p-1 align-self-center '></img>
						<div className='card-body'>
							<p className='card-title h3'>Tushar Kapoor</p>
						</div>
					</div>
				</div>
				</div>
			</div>
			
		</div>
	)
}

export default ProjectHead
