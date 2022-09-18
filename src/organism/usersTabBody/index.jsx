import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import TableHead from "../../atome/tableHead";
import UserTabData from "../../molecule/userTabData";
import DeleteModel from "../../molecule/deleteModel";
import UpdateUser from "../../molecule/updateUser";

const tHead = [
	"PERSONNEL ID",
	"NOM PERSONNEL",
	"NUMERO TELEPHONE",
	"ADRESSE EMAIL",
	"ROLE PERSONNEL",
	"ACTION",
];

function UsersTabBody() {
	const [showDeleteModel, setshowDeleteModel] = useState(false);
	const [updateUserModel, setupdateUserModel] = useState(false);
	const [usersGesPersonnel, setusersGesPersonnel] = useState([]);
	const [idRemove, setidRemove] = useState("");

	const fetchdata = () => {
		axios
			.get("/api/gestionPersonnel/findAll")
			.then(({ data }) => {
				setusersGesPersonnel(data);
			})
			.catch((err) => console.log(err));
	};

	function remove(id) {
		axios
			.delete(`/api/gestionPersonnel/deleteOne/${id}`)
			.then(() => {
				fetchdata();
			})
			.catch((err) => {
				console.log(err);
			});
	}
	const idOfItemToDelete = (id) => {
		setidRemove(id);
	};

	useLayoutEffect(() => {
		fetchdata();
	}, []);

	return (
		<React.Fragment>
			<table className='usersTab'>
				<TableHead head={tHead} />
				<tbody>
					{usersGesPersonnel.map((user, i) => (
						<UserTabData
							data={user}
							key={i}
							setshowDeleteModel={setshowDeleteModel}
							setupdateUserModel={setupdateUserModel}
							idOfItemToDelete={idOfItemToDelete}
						/>
					))}
				</tbody>
			</table>
			{showDeleteModel && (
				<DeleteModel
					setshowDeleteModel={setshowDeleteModel}
					remove={remove}
					idRemove={idRemove}
				/>
			)}
			{updateUserModel && (
				<UpdateUser
					data={usersGesPersonnel}
					setupdateUserModel={setupdateUserModel}
					reqData={"Personnel"}
				/>
			)}
		</React.Fragment>
	);
}

export default UsersTabBody;
