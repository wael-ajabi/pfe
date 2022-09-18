import React, { useState } from "react";
import axios from "axios";

import "./style.css";

function AddNewFournisseur({ setshowAddModel, data }) {
	const [fournisseur_id, setfournisseur_id] = useState("");
	const [nom_societe, setnom_societe] = useState("");
	const [nom_fournisseur, setnom_fournisseur] = useState("");
	const [numero_telephone, setnumero_telephone] = useState("");
	const [date_fin_contrat, setdate_fin_contrat] = useState("");
	const [adresse_societe, setadresse_societe] = useState("");
	const [service, setservice] = useState("");

	const addUser = () => {
		// fournisseur_id: String,
		// 		nom_societe: String,
		// 		nom_fournisseur: String,
		// 		numero_telephone: String,
		// 		date_fin_contrat: String,
		// 		date_fin_contrat: String,

		let colis = {
			fournisseur_id: fournisseur_id,
			nom_societe: nom_societe,
			numero_telephone: numero_telephone,
			nom_fournisseur: nom_fournisseur,
			date_fin_contrat: date_fin_contrat,
			adresse_societe: adresse_societe,
			service: service,
		};

		axios
			.post(`/api/gestionFournisseur/add`, colis)

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
				<h3>Ajouter Fournisseur</h3>
				<div className='parent'>
					<div>
						<label className='labelAdd'>Fournisseur id</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setfournisseur_id(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Nom du societe</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setnom_societe(e.target.value)}
						/>
					</div>

					<div>
						<label className='labelAdd'>Nom fournisseur</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setnom_fournisseur(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Numero telephone</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) =>
								setnumero_telephone(e.target.value)
							}
						/>
					</div>
					<div>
						<label className='labelAdd'>date_fin_contrat</label>
						<input
							className='inputAdd'
							type='date'
							onChange={(e) =>
								setdate_fin_contrat(e.target.value)
							}
						/>
					</div>
					<div>
						<label className='labelAdd'>adresse_societe</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setadresse_societe(e.target.value)}
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

export default AddNewFournisseur;
