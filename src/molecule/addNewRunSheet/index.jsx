import React, { useState } from "react";
import axios from "axios";

import "./style.css";

function AddNewRunSheet({ setshowAddModel, data }) {
	const [code_a_bare, setcode_a_bare] = useState("");
	const [nom_du_livreur, setnom_du_livreur] = useState("");
	const [date_de_creation, setdate_de_creation] = useState("");
	const [etat_debrief, setetat_debrief] = useState("");
	const [prix_total, setprix_total] = useState("");

	// "CODE A BARE",
	// 	"NOM DU LIVREUR",
	// 	"DATE DE CREATION",
	// 	"ETAT DEBRIEF",
	// 	"PRIX TOTAL",

	const addUser = () => {
		let runSheet = {
			code_a_bare: code_a_bare,
			nom_du_livreur: nom_du_livreur,
			date_de_creation: date_de_creation,
			etat_debrief: etat_debrief,
			prix_total: prix_total,
		};

		axios
			.post(`/api/gestionRunsheet/add`, runSheet)
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
				<h3>Ajouter runsheet</h3>
				<div className='parent'>
					<div>
						<label className='labelAdd'>Code a bare</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setcode_a_bare(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Nom du livreur</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setnom_du_livreur(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Date de creation</label>
						<input
							className='inputAdd'
							type='date'
							onChange={(e) =>
								setdate_de_creation(e.target.value)
							}
						/>
					</div>
					<div>
						<label className='labelAdd'>Etat debrief</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setetat_debrief(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Prix total</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setprix_total(e.target.value)}
						/>
					</div>
					{/* <div>
						<label className='labelAdd'>Etat</label>
						<select
							className='inputAdd'
							name='cars'
							id='cars'
							onChange={(e) => setetat(e.target.value)}
						>
							<option value='ChoisirRole'>Choisir l'etat</option>
							<option value='En_stock'>En stock</option>
							<option value='En_cours_de_livraison'>
								En cours de livraison
							</option>
							<option value='Livrés'>Livrés</option>
							<option value='Livrés_et_payes'>
								Livrés et payes
							</option>
							<option value='Planifiés_retour'>
								Planifiés retour
							</option>
							<option value='Retournés'>Retournés</option>
						</select>
					</div> */}
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

export default AddNewRunSheet;
