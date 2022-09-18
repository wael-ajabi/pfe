import React, { useState } from "react";
import "./style.css";
import AddUserLabel from "../../molecule/addUserLabel";
import GestionPersonnel from "../../molecule/gestionPersonel";
import ColisTabBody from "../coliesTab";
import AddNewColis from "../../molecule/addNewColis";
import ColisStat from "../../molecule/colisStat";

function ColisManager() {
	const [showAddModel, setshowAddModel] = useState(false);

	return (
		<>
			<div className='usersManager'>
				<AddUserLabel text={"Ajouter colis"} />
				<ColisStat />
				<div className='userManagerContent'>
					<GestionPersonnel
						setshowAddModel={setshowAddModel}
						text={"Gestion colis"}
						role={"colis"}
					/>
					<ColisTabBody />
				</div>
			</div>
			{showAddModel && (
				<AddNewColis setshowAddModel={setshowAddModel} data={"Colis"} />
			)}
		</>
	);
}

export default ColisManager;
