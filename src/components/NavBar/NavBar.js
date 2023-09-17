import React, { useEffect, useState } from "react"
import collegelogo from '../../Assets/big.png'
import logo from '../../Assets/whiteenactus.png'
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@iconify/react"
import menuIcon from "@iconify-icons/mdi/menu"
import menuCloseIcon from "@iconify-icons/mdi/menu-close"


export default function NavBar(props) {
	const [menuOpen, setMenuOpen] = useState(false)
	const [windowSize, updateWindowSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	})

	useEffect(() => {
		window.addEventListener("resize", () => {
			updateWindowSize({
				height: window.innerHeight,
				width: window.innerWidth,
			})
		})
	}, [])

	function onMenuClick() {
		setMenuOpen(!menuOpen)
	}

	useEffect(() => {
		document.body.classList.toggle("no-scroll", menuOpen)
	}, [menuOpen])

	return (
		<nav className='navbar fixed-top bg-black h-auto navbar-dark'>
			<div
				className='navbar-brand text-uppercase font-weight-bolder ml-4'
				>
				<a href="/"><img src={logo} style={{height: "5rem"}} alt="Enactus" /></a>
				
				<a href="https://adgitmdelhi.ac.in/"><img src={collegelogo} style={{height: "5rem"}} alt="Enactus" /></a>
			</div>
			<ul className='navbar-links d-none d-md-flex ml-auto text-white list-unstyled my-1'>
				{props.items.map((item, index) => {
					return (
						<li key={index} className='mr-4'>
							<a
								className='text-white text-uppercase text-decoration-none'
								href={item.link}
								target={item.target}>
								{item.title}
							</a>
						</li>
					)
				})}
			</ul>
			<Icon
				icon={menuOpen ? menuCloseIcon : menuIcon}
				className='d-block d-md-none'
				// passing these properties through class is not having any effect
				color='white'
				height='100%'
				width='auto'
				onClick={onMenuClick}
			/>
			<AnimatePresence exitBeforeEnter>
				{menuOpen && (
					<motion.div
						className='bg-black position-absolute d-flex d-md-none align-items-center'
						style={{
							...windowSize,
							top: 0,
							left: 0,
							zIndex: -1,
						}}
						initial={{ x: "-100vw", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: "100vw", opacity: 0 }}
						transition={{
							duration: 0.6,
							when: "beforeChildren",
							ease: "easeInOut",
						}}>
						<ul className='navbar-links d-flex d-md-none flex-column text-white list-unstyled pl-4'>
							{props.items.map((item, index) => {
								return (
									<motion.li
										initial={{ x: -100, opacity: 0 }}
										animate={{
											x: 0,
											opacity: 1,
											transition: {
												duration: 0.5,
												delay: index / 1.3,
												ease: "easeInOut",
											},
										}}
										exit={{
											x: 100,
											opacity: 0,
											transition: {
												duration: 0.3,
												delay: 0,
											},
										}}
										key={index}
										className='mb-4'>
										<a
											className='text-white text-uppercase h1 text-decoration-none'
											href={item.link}
											target={item.target}>
											{item.title}
										</a>
									</motion.li>
								)
							})}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}
