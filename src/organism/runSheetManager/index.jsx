import React, { useState } from "react";
import "./style.css";
import AddUserLabel from "../../molecule/addUserLabel";
import GestionPersonnel from "../../molecule/gestionPersonel";
import RunSheetTabBody from "../runSheetTab";
import AddNewRunSheet from "../../molecule/addNewRunSheet";

function RunSheetManager() {
	const [showAddModel, setshowAddModel] = useState(false);

	return (
		<>
			<div className='usersManager'>
				<AddUserLabel text={"Ajouter runsheet"} />

				<div className='userManagerContent'>
					<GestionPersonnel
						setshowAddModel={setshowAddModel}
						text={"Gestion runsheet"}
						role={"runsheet"}
					/>
					<RunSheetTabBody />
				</div>
			</div>
			{showAddModel && (
				<AddNewRunSheet
					setshowAddModel={setshowAddModel}
					data={"Runsheet"}
				/>
			)}
		</>
	);
}

export default RunSheetManager;
