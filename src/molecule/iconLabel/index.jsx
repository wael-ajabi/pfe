import React from "react";
import "./style.css";
import Icon from "../../atome/icon";
import Text from "../../atome/text";

function IconLabel({ info, onClick }) {
	return (
		<div className='iconLabel flexStart' onClick={onClick}>
			<Icon path={info.path} fill={"rgb(176, 179, 185)"} />
			<Text text={info.text} />
		</div>
	);
}

export default IconLabel;
