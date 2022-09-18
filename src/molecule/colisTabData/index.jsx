import React from "react";
import "./style.css";
import Icon from "../../atome/icon";

function ColisTabData({
	data,
	setshowDeleteModel,
	setupdateUserModel,
	idOfItemToDelete,
}) {
	const setTwoStatesDelete = () => {
		setshowDeleteModel(true);
		idOfItemToDelete(data._id);
	};
	const setTwoStatesUpdate = () => {
		setupdateUserModel(true);
		console.log(data);
		var idd = data._id;
		localStorage.setItem("idOfUserToUpdate", idd);
	}
	
return (
	<tr className='dataRow'>
			<td>{data.code_a_bare}</td>
			<td className='ImageAndFullname'>{data.nom_du_client}</td>
			<td>{data.numero_telephone}</td>
			<td>{data.date_de_creation}</td>
			<td>{data.code}</td>
			<td className={data.etat}>
				<p>{data.etat}</p>
			</td>
			<td>{data.service}</td>
			<td className='flexStart actionIcons'>
				<div onClick={() => setTwoStatesUpdate()}>
					<Icon 
					clas="disable"
						path={
							"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
						}
						fill={"#a9a2f5"}
					/>
				</div>
				<div onClick={() => setTwoStatesDelete()}>
					<Icon
					clas="disable"
					path={
						"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					}
					fill={"#ef7d7e"}
					/>
				</div>
			</td>
		</tr>
	);
}

export default ColisTabData;
