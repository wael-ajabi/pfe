import React from "react";
import "./style.css";
import Text from "../../atome/text";
import Icon from "../../atome/icon";
import { Image } from "cloudinary-react";

function UserTabData({
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
		var idd = data.id;
		localStorage.setItem("idOfUserToUpdate", idd);
	};
	return (
		<tr className='dataRow'>
			<td>{data.id}</td>
			<td className='ImageAndFullname'>
				{/* <Image src={data.photo} /> */}
				<Image
					cloudName='outibois'
					public_id={data.photo}
					className='userImage'
				/>
				<div className='flexColStart fullName'>
					<Text text={data.nom} />
					<Text text={data.role} />
				</div>
			</td>
			<td>{data.tel}</td>
			<td>{data.mail}</td>
			<td className={data.role}>
				<p>{data.role}</p>
				{/* {data.role} */}
			</td>
			<td className='flexStart actionIcons'>
				<div onClick={() => setTwoStatesUpdate()}>
					<Icon 
						path={
							"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
						}
						fill={"#a9a2f5"}
					/>
				</div>
				<div onClick={() => setTwoStatesDelete()}>
					<Icon 
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

export default UserTabData;
