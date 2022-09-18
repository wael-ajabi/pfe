import React from "react";

function TableHead({ head }) {
	return (
		<thead>
			<tr>
				{head.map((ele, i) => (
					<th key={i}>{ele}</th>
				))}
			</tr>
		</thead>
	);
}

export default TableHead;
