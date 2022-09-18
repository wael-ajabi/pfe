import React, { useState } from "react";
import axios from "axios";

import "./style.css";

function AddNewHub({ setshowAddModel, data }) {
	const [hub_id, sethub_id] = useState("");
	const [titre_hub, settitre_hub] = useState("");
	const [adresse, setadresse] = useState("");
	const [gouvernorat, setgouvernorat] = useState("");

	const addUser = () => {
		
		let colis = {
			hub_id: hub_id,
			titre_hub: titre_hub,
			gouvernorat: gouvernorat,
			adresse: adresse,
		};

		axios
			.post(`/api/gestionHub/add`, colis)

			.then(() => {
				window.location.reload();
				setshowAddModel(false);
				console.log("colis added successfully !");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='addModel flex'>
			<div className='modell'>
				<h3>Ajouter Hub</h3>
				<div className='parent'>
					<div>
						<label className='labelAdd'>Hub id</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => sethub_id(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Titre hub</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => settitre_hub(e.target.value)}
						/>
					</div>

					<div>
						<label className='labelAdd'>Adresse</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setadresse(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Gouvernorat</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setgouvernorat(e.target.value)}
						/>
					</div>
				</div>
				<div className='parentBtn'>
					<button
						onClick={() => {
							setshowAddModel(false);
						}}
						className='AddBtn'
					>
						Annuler
					</button>
					<button className='AddBtn' id='ajouter' onClick={addUser}>
						Ajouter
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddNewHub;
