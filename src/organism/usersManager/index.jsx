import React, { useState } from "react";
import "./style.css";
import AddUserLabel from "../../molecule/addUserLabel";
import GestionPersonnel from "../../molecule/gestionPersonel";
import UsersTabBody from "../usersTabBody";
import AddNewUser from "../../molecule/addNewUser";

function UsersManager() {
	const [showAddModel, setshowAddModel] = useState(false);

	return (
		<React.Fragment>
			<div className='usersManager'>
				<AddUserLabel text={"Ajouter personnel"} />
				<div className='userManagerContent'>
					<GestionPersonnel
						setshowAddModel={setshowAddModel}
						text={"Gestion personnel"}
						role={"personnel"}
					/>
					<UsersTabBody />
				</div>
			</div>
			{showAddModel && (
				<AddNewUser
					setshowAddModel={setshowAddModel}
					data={"Personnel"}
				/>
			)}
		</React.Fragment>
	);
}

export default UsersManager;
