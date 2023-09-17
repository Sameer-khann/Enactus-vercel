import React from "react"
import MritkalaLogo from "../../../../Assets/MritkalaLogo.png"
import ShallowFloatingBowl from "../../../../Assets/ShallowFloatingBowl.png"
import TulsiPot1 from "../../../../Assets/TulsiPot1.png"
import './hero.css'

const Hero = () => {
	return (
		<section
            className="container-fluid"
			style={{
				backgroundColor: "#DDC9B4",
				minHeight: `100vh`,
				display: "grid",
				placeItems: "center",
			}}>
			<div className='container-lg'>
				<div class='d-flex flex-column flex-md-row bd-highlight align-items-center'>
					<div class='p-2 bd-highlight col-md-5 d-flex justify-content-center align-items-center'>
						<img
							src={MritkalaLogo}
							alt='Mritkala logo'
							className='w-100 h-auto'
							style={{ maxWidth: 400 }}
						/>
					</div>
					<div class='p-2 flex-shrink-1 bd-highlight'>
						<div className='our-mission row justify-content-center align-items-center py-5'>
							<p className='h1 font-weight-bold heading text-sea-weed'>Project Mritkala</p>
							<div className='inner-content'>
								<p className='mb-0 text-center h5 font-weight-light'>
									Project Mritkala, is an enterprise under Enactus ADGITM, that intends to acquaint
									the society with the revamped trend of pottery. Our aim is to succour the artisans
									who possess the artistry of moulding clay into alluring handcrafted resilient pieces
									of craftsmanship.
								</p>
								<div
									className='on-going-projects-images d-none d-sm-flex row my-4 justify-content-center'
									id='FeaturedProject'>
									<img src={TulsiPot1} alt='Tulsi pot' />
									<img src={ShallowFloatingBowl} alt='shallow floating bowl' />
									<img src={TulsiPot1} alt='tulsi pot' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
