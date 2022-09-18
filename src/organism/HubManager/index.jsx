import React, { useState } from "react";
import "./style.css";
import AddUserLabel from "../../molecule/addUserLabel";
import GestionPersonnel from "../../molecule/gestionPersonel";
import AddNewHub from "../../molecule/addNewHub";
import HubTabBody from "../HubTab";

function HubManager() {
	const [showAddModel, setshowAddModel] = useState(false);

	return (
		<>
			<div className='usersManager'>
				<AddUserLabel text={"Ajouter Hub"} />
				<div className='userManagerContent'>
					<GestionPersonnel
						setshowAddModel={setshowAddModel}
						text={"Gestion Hub"}
						role={"hub"}
					/>
					<HubTabBody />
				</div>
			</div>
			{showAddModel && (
				<AddNewHub setshowAddModel={setshowAddModel} data={"Hub"} />
			)}
		</>
	);
}

export default HubManager;
