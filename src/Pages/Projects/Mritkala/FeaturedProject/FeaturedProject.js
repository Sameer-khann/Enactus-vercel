import React from "react"
import Heading from "../Heading/Heading"
import CoffeeMug1 from "../../../../Assets/CoffeeMug1.png"
import CoffeeMug2 from "../../../../Assets/CoffeeMug2.png"
import CoffeeMug3 from "../../../../Assets/CoffeeMug3.png"
import "./FeaturedProject.css"
import { Icon } from "@iconify/react"
import arrowRight from "@iconify-icons/mdi/arrow-bottom-right"

const FeaturedProject = () => {
	return (
		<div className='container-fluid'>
			<div className='our-mission container-lg d-flex flex-column justify-content-center align-items-center py-5'>
				<Heading main='featured product' />
				<div className='on-going-projects-images d-flex row my-4 justify-content-center' id='FeaturedProject'>
					<img src={CoffeeMug2} alt='coffee mug 1'/>
					<img src={CoffeeMug1} alt='coffee mug 2'/>
					<img src={CoffeeMug3} alt='coffee mug 3'/>
				</div>
				<div className='inner-content h5 font-weight-light text-center'>
					<p className='mb-0'>
						A mug that is stylish and elegant at the same time. This exotic piece will bring a touch of
						elegance to your existing crockery collection and a delight to your tea time. It is dishwater
						friendly and comes in vibrant colours.
					</p>
					<br />
					<a
						href='https://darpan.enactusadgitm.in/'
						target='black'
						className='text-uppercase h4 font-weight-bolder mt-md-3'
						style={{ textDecorationStyle: "underline" }}
						role='button'>
						Check out other products
						<Icon
							color='white'
							width='1.3rem'
							className='rounded-circle align-self-center ml-2'
							style={{ transform: "rotateZ(-45deg)scale(1.2)", backgroundColor: "#F1915A" }}
							icon={arrowRight}
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default FeaturedProject
