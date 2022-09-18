import React from "react";

function Input({ label, placeHolder }) {
	return (
		<div className='flex'>
			<label htmlFor='input'>{label}</label>
			<input type='text' name='input' placeholder={placeHolder} />
		</div>
	);
}

export default Input;
