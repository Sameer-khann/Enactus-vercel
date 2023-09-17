import React from "react"

import "./Heading.css"

export default function Heading({ main, sub }) {
	return (
		<>
			{(main || sub) && (
				<div className='heading col-12 text-center' id='abeer-heading'>
					{main && (
						<p className='main h1 text-uppercase font-weight-bolder text-sea-weed'>
							{main}
						</p>
					)}
					{sub && <p className='sub h5 font-weight-600'>{sub}</p>}
				</div>
			)}
		</>
	)
}
