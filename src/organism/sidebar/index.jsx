import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Image from "../../atome/image";
import IconLabel from "../../molecule/iconLabel";

const infos = [
	{
		text: "Dashboard",
		link: "/backOfficeInterface/dashboard",
		path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
	},
	{
		text: "Profile",
		link: "/backOfficeInterface/adminProfile",
		path: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
	},
	{
		text: "Gestion Personnel",
		link: "/backOfficeInterface/gestionPersonnel",
		path: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
	},
	{
		text: "Gestion Fournisseurs",
		link: "/backOfficeInterface/gestionfournisseurs",
		path: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
	},
	{
		text: "Gestion Colis",
		link: "/backOfficeInterface/gestioncolis",
		path: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
	},
	{
		text: "Gestion Runsheet",
		link: "/backOfficeInterface/gestionrunsheet",
		path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
	},
	{
		text: "Gestion Console",
		link: "/backOfficeInterface/gestionconsole",
		path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
	},
	{
		text: "Gestion Hub",
		link: "/backOfficeInterface/gestionhub",
		path: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
	},
	{
		text: "Colis Retournés",
		link: "/backOfficeInterface/golisretournés",
		path: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
	},
];

function SideBar() {
	const navigate = useNavigate();
	const myFunction = (link) => {
		navigate(link);
		var elements = Array.from(document.getElementsByClassName("iconLabel"));
		elements.map((elem) =>
			elem.matches(":hover")
				? elem.classList.add("visited")
				: elem.classList.remove("visited")
		);
	};

	return (
		<div className='sideBarContainer flexColStart'>
			<Image
				src={
					"https://media.discordapp.net/attachments/902991650727538769/964879352326144000/image_2022-04-16_142353994-removebg-preview.png"
				}
			/>
			{infos.map((info, i) => (
				<IconLabel
					info={info}
					key={i}
					onClick={() => myFunction(info.link)}
				/>
			))}
		</div>
	);
}

export default SideBar;
