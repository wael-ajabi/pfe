import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../organism/login/index";
import { useNavigate } from "react-router-dom";

import "./style.css";
// import { useHistory } from "react-router-dom";
import Icon from "../../atome/icon";
import Text from "../../atome/text";
import Image from "../../atome/image";
import Popoup from "../../molecule/logoutPopUp"
const leftIcons = [
	"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
	"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
	"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
	"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
	"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
];

const rigthIcons = [
	"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
	"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
	"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
	"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
];
function logout(){
	
	document.getElementById('logout').style.display='block'
}

function Navbar() {
	let navigate = useNavigate();

	function handleClick() {
		navigate('/')
	  }	// let history = useHistory();

	// function handleClick(path) {
	// 	history.push(path);
	// }
	return (
		<div className='fixed'>
		<div className='navbar'>
			<div className='leftIcons flex'>
				{leftIcons.map((path, i) => (
					<Icon path={path} key={i} fill={"#fff"} />
				))}
			</div>
			<div className='rightPart flex'>
				<div className='language flex'>
					<Image src='https://cdn-icons-png.flaticon.com/512/206/206626.png' />
					<Text text='English' />
				</div>
				<div className='flex rigthIcons'>
					{rigthIcons.map((path, i) => (
						<Icon path={path} key={i} fill={"#fff"} />
					))}
				</div>
				<img onClick={logout} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/800px-Circle-icons-profile.svg.png'  />
			
			</div>
		</div>
		<div id="logout"><button onClick={handleClick}>Deconexion</button></div>
		</div>
	);
}

export default Navbar;
