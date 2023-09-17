import React, { useState } from "react"
import { NavBar } from "../../../components"
import gutargu0 from "../../../Assets/Projects/Gutargu/gutargu0.png"
import gutargu1 from "../../../Assets/Projects/Gutargu/gutargu1.png"
import gutargu2 from "../../../Assets/Projects/Gutargu/gutargu2.png"
import gutargu3 from "../../../Assets/Projects/Gutargu/gutargu3.PNG"
import { Icon } from "@iconify/react"
import arrowRight from "@iconify-icons/mdi/arrow-bottom-right"
import { Modal } from "react-bootstrap"

const contentlist = [
	{
		heading: "The Silent Pandemonium",
		content:
			"An oxymoron which became our reality and changed the world in an unprecedented way. What once were loud and roaring streets, now became deadly silent. Lockdown has been – and continues to be – a very challenging period for many of us, but it has also forced us to prioritize our mental and physical health.Shedding light on how India as a country, crossed all the hurdles laid in its path, we, Enactus ADGITM, present to you, the fourth edition of Gutargu: THE SILENT PANDEMONIUM",
		date: "August 2021",
		image: gutargu3,
		link: "https://fliphtml5.com/xwhcy/most",
		reviewFormLink: `https://docs.google.com/forms/d/e/1FAIpQLSf1ENIr099JN1F7pov1Yp2H1VJgAnym7RGI6ZI0t73cXrJ2Eg/viewform`,
	},
	{
		heading: "Prism Love",
		content:
			"For the Indian LGBT community, a truly inclusive society remains a distant dream. Often people's prejudices lead them to believe that LGBTQ people are odd and very different. But what they fail to comprehend is that, every year, a huge number of LGBTQ people face issues related to violence, unemployment, discrimination, poverty and lack of healthcare facilities. Every day, hundreds of LGBT people wrestle for equal rights, equal opportunities and acceptance in their homes and society. Voicing the challenges faced by Indian LGBTQA community, we bring to you the 3rd edition of our e-magazine Gutargu.",
		date: "December 2020",
		image: gutargu2,
		link: "https://online.fliphtml5.com/xwhcy/akcw/",
		reviewFormLink: `https://docs.google.com/forms/d/e/1FAIpQLSf1ENIr099JN1F7pov1Yp2H1VJgAnym7RGI6ZI0t73cXrJ2Eg/viewform`,
	},
	{
		heading: "Hardships of People during Lockdown",
		content:
			"For millions, lockdown is not novels and quality family time but stress and hardships. Some used this period as an opportunity to develop new skills, while some slipped between the cracks and were left to deal with the impending consequences of the lockdown. With the virus inflecting irreparable damages to our lives, we all went through a phase of retrospect where we came face to face with our vulnerabilities and helplessness. The second edition of Gutargu brings to light such experiences of people in the lockdown.",
		date: "November 2020",
		image: gutargu1,
		link: "https://bit.ly/Gutargu-2nd-edition",
		reviewFormLink: `https://docs.google.com/forms/d/e/1FAIpQLSf1ENIr099JN1F7pov1Yp2H1VJgAnym7RGI6ZI0t73cXrJ2Eg/viewform`,
	},
	{
		heading: "Child Abduction",
		content:
			"Child abduction is the unauthorised removal or retention of a minor from a parent or anyone with legal responsibility of the child. Reports suggest that on an average, a child disappears every 8 minutes in India. These children fall victim to aggravated crimes such as trafficking, enslavement, sexual harassment, forced beggary and organ theft. While many schemes and guidelines have been implemented to reduce the percentage of this heinous crime, abductors still continue to operate in the country.",
		date: "October 2020",
		image: gutargu0,
		link: "https://bit.ly/3cW2BGk",
		reviewFormLink: `https://docs.google.com/forms/d/e/1FAIpQLSf1ENIr099JN1F7pov1Yp2H1VJgAnym7RGI6ZI0t73cXrJ2Eg/viewform`,
	},
]

const navlinks = [
	{
		title: "home",
		link: "/",
	},
	{
		title: "Astitva",
		link: "/",
		target: "blank",
	},
	{
		title: "Projects",
		link: "/",
	},
]

const Gutargu = () => {
	let [reviewFormInfo, updateReviewFormInfo] = useState({ show: false, formLink: null })

	const onMagazineCardClick = magazineIndex => {
		const reviewFormLink = contentlist[magazineIndex].reviewFormLink
		updateReviewFormInfo({ show: true, formLink: reviewFormLink })
	}

	return (
		<>
			<NavBar items={navlinks} />
			<div className='gutargu container-fluid text-center safe-space'>
				<p className='m-0 gutargu-heading'>gutargu</p>
				<p className='h5 text-dark font-weight-normal'>
					Sub Project of
					<a href='astitva' className='ml-1 text-dark' style={{ textDecoration: "underline" }}>
						Initiative Astitva
					</a>
				</p>
				<p className='mt-5 h3'>EXCLUSIVE MAGAZINES</p>
				<div className='container-lg mt-5'>
					{contentlist.map((item, index) => (
						<div className='row my-0 py-0 justify-content-center'>
							<div
								key={index}
								className='col-12 col-sm-10 col-md-12 row justify-content-center border rounded-lg border-dark-gray shadow d-flex mb-4 py-3 px-2 '>
								<div className='col-12 col-sm-6 col-md-4 col-xl-3 align-self-center'>
									<img className='w-100 h-auto' src={item.image} alt={contentlist.date} />
								</div>
								<div className='col-12 col-sm-12 col-md-8 col-xl-9 mt-3'>
									<div className='text-left'>
										<p className='h6 mb-0'>{item.date}</p>
										<h3 className='mb-2'>{item.heading}</h3>
										<p className='text-justify'>{item.content}</p>
										<a
											href={item.link}
											onClick={() => onMagazineCardClick(index)}
											target='blank'
											className='stretched-link'
											style={{ textDecoration: "underline" }}>
											Read More
											<Icon
												color='black'
												width='1.5rem'
												className='bg-primary rounded-circle align-self-center ml-3'
												style={{ transform: "rotateZ(-45deg)scale(1.2)" }}
												icon={arrowRight}
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Modal
				show={reviewFormInfo.show}
				centered
				height='100%'
				onHide={() => updateReviewFormInfo({ show: false, formLink: null })}>
				<Modal.Header closeButton>
					<Modal.Title>Magazine Review Form</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<iframe
						title='magazine review form'
						src={reviewFormInfo.formLink}
						frameborder='0'
						width='100%'
						height='600px'>
						Loading...
					</iframe>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default Gutargu
