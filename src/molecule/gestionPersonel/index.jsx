import React from "react";
import "./style.css";
import Text from "../../atome/text";
import Icon from "../../atome/icon";
import Select from "../../atome/select";
import Input from "../../atome/input";

function GestionPersonnel({ setshowAddModel, text, role }) {
	return (
		<div className='gestionPersonnel '>
			<div className='flexBetween labelGestion'>
				<Text text={text} />
				<Icon
					path={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}
					fill={"#54525e"}
				/>
			</div>
			<div
				onClick={() => {
					setshowAddModel(true);
						setTimeout(()=>{if(document.getElementsByClassName('disable')[0]){
						document.getElementsByClassName('disable')[0].style.stroke='gray'; 
						document.getElementsByClassName('disable')[1].style.stroke='gray';}} ,5000)
				}}
				className='flex addPerson'
			>
				<Icon path={"M12 6v6m0 0v6m0-6h6m-6 0H6"} fill={"#fff"} />
				<Text text={"Ajouter " + role} />
			</div>
			<div className='flexBetween selectAndSearchInput'>
				<div className='flex selectSection'>
					<Text text={"Afficher"} />
					<Select options={[10, 20, 30, 40, 50]} />
					<Text text={role} />
				</div>
				<Input placeHolder={"Filter"} label={"Filter"} />
			</div>
		</div>
	);
}

export default GestionPersonnel;
