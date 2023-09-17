import React from "react"

import Heading from "../Heading/Heading"

import image1 from "../../../../Assets//Projects/Abeer/1614234524180 (1) 1.png"
import image2 from "../../../../Assets//Projects/Abeer/IMG_20210224_140420 1.png"
const para1 = `The backbone of Project Abeer is a community of Afghan refugee women who have been residing in Delhi’s Lajpat Nagar for over 10 years. Throughout the decade, they have faced numerous challenges due to lack of proper documentations and are unable to pursue higher education, the reason being their grim economic conditions.`
const para2 = `With the help of Project Abeer, they are provided with employment in the field of soap making and manufacturing. They create 100% organic soaps with all natural ingredients and pack them in eco-friendly packages which are delivered to your homes to provide you with nature’s personal touch.`

const Community = () => {
	return (
		<div className='container-lg my-4 mx-auto row justify-content-center'>
			<Heading main='community' sub='people behind the magic' />
				<div className='upper d-flex flex-column flex-md-row px-0 justify-content-center align-items-center'>
					<img
						src={image1}
						alt='community 1'
						className=' col-md-6 p-2'
					/>
					<p
						className=' col-md-6 h5 text-justify text-lg-left font-weight-light p-2'
						style={{ lineHeight: 1.6 }}>
						{para1}
					</p>
				</div>
				<div className='upper d-flex flex-column flex-md-row-reverse px-0 justify-content-center align-items-center'>
					<img
						src={image2}
						alt='community 2'
						className='col-md-6 p-2'
					/>
					<p
						className='col-md-6 h5 text-justify text-lg-right font-weight-light p-2'
						style={{ lineHeight: 1.6 }}>
						{para2}
					</p>
				</div>
			
		</div>
	)
}

export default Community
