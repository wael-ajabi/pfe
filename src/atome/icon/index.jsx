import React from "react";
import "./style.css";

const Icon = ({ path, fill, clas }) => (
	<svg
		
		xmlns='http://www.w3.org/2000/svg'
		className={clas}
		fill='none'
		viewBox='0 0 24 24'
		stroke={fill}
		strokeWidth={2}
	>
		<path strokeLinecap='round' strokeLinejoin='round' d={path} />
	</svg>
);


export default Icon;
