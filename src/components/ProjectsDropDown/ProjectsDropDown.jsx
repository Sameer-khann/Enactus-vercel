import React from "react"

export default function ProjectsDropDown({
	items,
	currentItem,
	updateCurrentItem,
	className,
}) {
	const onOptionClick = event => {
		updateCurrentItem(event.target.value)
	}
	return (
		<div className={`${className} mt-3 mx-5 `}>
			<select
				className={"custom-select text-black border-black"}
				value={currentItem}
				onChange={onOptionClick}>
				{items.map((item, index) => (
					<option key={index} value={index}>
						{item.name || item.title}
					</option>
				))}
			</select>
		</div>
	)
}
