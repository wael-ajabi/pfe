import React from "react";
import "./style.css";
import Text from "../../atome/text";
import Icon from "../../atome/icon";

function AddUserLabel({ text }) {
	return (
		<div className='addUserLabel flexBetween'>
			<Text text={text} />
			<div className='gridIcon flex'>
				<Icon
					fill={"#fff"}
					path={
						"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
					}
				/>
			</div>
		</div>
	);
}

export default AddUserLabel;
