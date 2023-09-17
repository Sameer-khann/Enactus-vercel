import React from "react"

import quotesStart from "../../Assets/quotes_start.svg"
import quotesEnd from "../../Assets/quotes_end.svg"

// define any common style for quote commas here
const quoteCommaStyle = { maxWidth: "4rem" }

const Quote = () => {
	return (
		<div className='container-fluid'>
			<div className='row justify-content-center py-4'>
				<img
					src={quotesStart}
					alt='quote start'
					className='col-2 col-md-1'
					style={quoteCommaStyle}
				/>
				<blockquote class='blockquote text-center col-12 col-lg-auto py-2 py-lg-0'>
					<p class='mb-0 h3 font-weight-light font-italic'>
						Be the change you wish to see in the world.
					</p>
					<footer class='blockquote-footer bg-transparent font-weight-bolder text-black'>
						Mahatma Gandhi
					</footer>
				</blockquote>
				<img
					src={quotesEnd}
					alt='quote end'
					className='col-2 col-md-1'
					style={quoteCommaStyle}
				/>
			</div>
		</div>
	)
}

export default Quote
