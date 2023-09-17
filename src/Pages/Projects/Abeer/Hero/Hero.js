import React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

import abeerHeroImage from "../../../../Assets/Projects/Abeer/hero.png"
import plasticFreePackagingLogo from "../../../../Assets/Projects/Abeer/plastic-free.svg"
import mildAndGentleFormulationLogo from "../../../../Assets/Projects/Abeer/mild-and-gentle-formulation.svg"
import noHarmfulChemicalsLogo from "../../../../Assets/Projects/Abeer/no-harmful-chemicals.svg"
import organicLogo from "../../../../Assets/Projects/Abeer/organic.svg"

const benefits = [
	{ name: "plastic-free packaging", logo: plasticFreePackagingLogo },
	{ name: "mild & gentle formulation", logo: mildAndGentleFormulationLogo },
	{ name: "no harmful chemicals", logo: noHarmfulChemicalsLogo },
	{ name: "absolutely organic", logo: organicLogo },
]

export default function Hero() {
	const y = useMotionValue(0)
	const opacity = useTransform(y, [0, 200], [1, 0])

	return (
		<>
			<div className='h-auto safe-space d-flex justify-content-center align-items-end px-0 mx-0 overflow-hidden'>
				<div className='benefits-left d-none d-lg-flex flex-column col-3 m-0 p-0 align-self-center'>
					{benefits.slice(0, 2).map((b, i) => (
						<div
							className={`col-auto d-flex justify-content-center align-items-center my-5 ${
								i % 2 === 0
									? "flex-column"
									: "flex-column-reverse"
							}`}>
							<p
								className='h5 font-weight-bolder my-4 text-center text-capitalize'
								style={{
									textShadow: "2px 2px 4px #aaa",
								}}>
								{b.name}
							</p>
							<img
								className='w-25'
								src={b.logo}
								alt={b.name + " logo"}
							/>
						</div>
					))}
				</div>
				<motion.img
					initial={{ opacity: 0, scale: 1.2 }}
					animate={{
						opacity: 1,
						scale: 1,
						transition: {
							duration: 2,
							ease: "anticipate",
							type: "tween",
						},
					}}
					whileHover={{
						scale: 1.1,
						transition: {
							type: "tween",
							duration: 1,
							ease: "anticipate",
						},
					}}
					src={abeerHeroImage}
					alt='hero'
					style={{
						originY: 0,
						y,
						opacity,
						height: "auto",
						width: "auto",
						maxWidth: "calc(100 * var(--vw))",
						maxHeight:
							"calc(100 * var(--vh) - var(--header-height))",
					}}
				/>
				<div className='benefits-left d-none d-lg-flex flex-column col-3 m-0 p-0 align-self-center'>
					{benefits.slice(2, benefits.length).map((b, i) => (
						<div
							className={`col-auto d-flex justify-content-center align-items-center my-5 ${
								i % 2 === 0
									? "flex-column"
									: "flex-column-reverse"
							}`}>
							<p
								className='h5 font-weight-bolder my-4 text-center text-capitalize'
								style={{
									textShadow: "2px 2px 4px #aaa",
								}}>
								{b.name}
							</p>
							<img
								className='w-25'
								src={b.logo}
								alt={b.name + " logo"}
							/>
						</div>
					))}
				</div>
			</div>
			<div className='container-sm d-block d-lg-none mt-5'>
				<div className='benefits-bottom row justify-content-center'>
					{benefits.map((b, i) => (
						<div
							className={`col-12 col-sm-6 d-flex flex-column justify-content-center align-items-center mb-2 ${
								i % 2 === 0
									? " justify-content-md-end"
									: "justify-content-md-start"
							}`}>
							<p
								className='h5 font-weight-bolder my-4 text-center text-capitalize'
								style={{
									textShadow: "2px 2px 4px #aaa",
								}}>
								{b.name}
							</p>
							<img
								className='w-25'
								src={b.logo}
								alt={b.name + " logo"}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
