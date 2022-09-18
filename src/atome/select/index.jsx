import React from "react";

function Select({ options }) {
	return (
		<select>
			{options.map((option, i) => (
				<option value={option} key={i}>
					{option}
				</option>
			))}
		</select>
	);
}

export default Select;
