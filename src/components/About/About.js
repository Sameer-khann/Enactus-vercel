import React from "react"

const bigContent =
	"Enactus is an international non-profit organization that nurtures managerial skills of students. It channelizes the energy of these future leaders towards constructing innovative business models that improve the quality of life and standard of living of the people in need. Enactus creates and implements community empowerment projects around the globe. The experience not only transforms lives, but also helps students develop the skills that are essential in this challenging, corporate world."

const list = [
	{
		heading: { short: "en", full: "trepreneurial" },
		def: "Initiating business innovation with integrity and passion.",
	},
	{
		heading: { short: "act", full: "ion" },
		def: "The experience of social impact that sparks social enterprise.",
	},
	{
		heading: { short: "us", full: "" },
		def:
			"Student, academic and business leaders collaborating to create a better world.",
	},
]

const About = () => {
	return (
		<div className='about container-lg mt-5 mb-4'>
			<p className='heading h1 text-uppercase font-weight-600 text-center font-weight-normal mb-3 text-lowercase'>
				WHO ARE WE
			</p>
			<div className='about-inner row px-3 px-md-0 justify-content-center align-items-stretch'>
				<div className='about-inner-left col-12 col-sm-10 col-md-5 border-black d-flex align-items-center'>
					<p className='text-center text-md-right font-weight-light'>
						{bigContent}
					</p>
				</div>
				<div className='about-inner-right col-12 col-sm-10 col-md-5 border-black'>
					<ul className='pt-3 pt-md-0 text-center text-md-left pl-3'>
						{list.map((item, idx) => (
							<li key={idx} className=''>
								<p className='text-uppercase h5 font-weight-600 mb-0'>
									<span className='text-primary'>
										{item.heading.short}
									</span>
									{item.heading.full}
								</p>
								<p className='font-weight-light'>{item.def}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default About
