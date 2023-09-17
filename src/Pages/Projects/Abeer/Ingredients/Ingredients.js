import React from "react"

import Heading from "../Heading/Heading"

const ingredientsList = [
	{
		name: "aloevera",
		content: `Aloe Vera prevents excessive oiliness like a charm, it's extracts are used for skin treatments to heal wounds, it moisturises dry skin, relieve itching, swelling and inflammations. This healing plant used in Ayurvedic medicine protects from sunburn, provides oxidative stress relief, recovers skin tone and keeps your skin healthy and shining.`,
	},
	{
		name: "tulsi",
		content: `Tusli has been used for years in India because of its rich health, skin and hair benefits, antiseptic properties that prevent acne and pimple leaving a beaming glow to your skin. Tulasi extracts acts as an exfoliator and detoxify dead skin cells, brightens your skin, and immerses stress free vibes due to its pleasant aroma.`,
	},
	{
		name: "vitamin-e",
		content: `Vitamin-E acts an army that defends and protects skin from any damage. It encourages healing, shields skin from damage due to its protective properties. It is enriched with soothing properties as it includes antioxidants that heals your skin.Vitamin-E oil is directly absorbed through the skin and promotes blood circulation leaving your skin moist.`,
	},
]

const Ingredients = () => {
	return (
		<div className='container-lg my-5'>
			<Heading main='ingredients' />
			<div className='ingredients-list row justify-content-center'>
				{ingredientsList.map((item, index) => (
					<div
						key={index}
						className='card mt-4 col-10 align-items-center p-0 border-rounded border-0 shadow'>
						<div className='card-body'>
							<p className='h5 font-weight-bold text-uppercase'>
								{item.name}
							</p>
							<p className='font-weight-light text-dark text-uppercase mb-0'>
								{item.content}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Ingredients
