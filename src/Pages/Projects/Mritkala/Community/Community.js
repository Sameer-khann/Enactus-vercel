import React from "react"
import Heading from "../Heading/Heading"
import communityImage1 from "../../../../Assets/community.jpg"
import communityImage2 from "../../../../Assets/community2.jpg"
import communityImage3 from "../../../../Assets/community3.jpg"

const communtiyContent = `The backbone of pottery industry are numerous competent craftsmen who have achieved mastery and finesse in this artform over a period of several years. The potter community situated in Prajapat Colony, Uttam Nagar have faced diverse hardships, but their zeal and passion towards their craft always subdued them. By joining hands with our Project, these potters have taken a step towards a more stable income, increased customer satisfaction and expansion of their line of products.`

const Community = () => {
	return (
		<div className='container-lg'>
			<Heading main='community' />
			<div className='image-wrapper'>
				<img src={communityImage1} alt='community1' />
				<img src={communityImage2} alt='community2' />
				<img src={communityImage3} alt='community3' />
			</div>
			<div className="row mt-2">
				<p className="h5 font-weight-light text-center">{communtiyContent}</p>
			</div>
		</div>
	)
}

export default Community
