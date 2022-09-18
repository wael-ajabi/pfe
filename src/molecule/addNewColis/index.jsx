import React, { useState } from "react";
import axios from "axios";

import "./style.css";

function AddNewColis({ setshowAddModel, data }) {
	const [code_a_bare, setcode_a_bare] = useState("");
	const [nom_du_client, setnom_du_client] = useState("");
	const [numero_telephone, setnumero_telephone] = useState("");
	const [date_de_creation, setdate_de_creation] = useState("");
	const [code, setcode] = useState("");
	const [etat, setetat] = useState("");
	const [service, setservice] = useState("");

	const addUser = () => {
		let colis = {
			code_a_bare: code_a_bare,
			nom_du_client: nom_du_client,
			numero_telephone: numero_telephone,
			date_de_creation: date_de_creation,
			code: code,
			etat: etat,
			service: service,
		};

		axios
			.post(`/api/gestion${data}/add`, colis)

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
				<h3>Ajouter colis</h3>
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
						<label className='labelAdd'>Nom du client</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setnom_du_client(e.target.value)}
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
						<label className='labelAdd'>Code</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setcode(e.target.value)}
						/>
					</div>
                    <div>
						<label className='labelAdd'>Etat</label>
						<select
							className='inputAdd'
							name='cars'
							id='cars'
							onChange={(e) => setetat(e.target.value)}
						>
							<option value='ChoisirRole'>Choisir l'etat</option>
							<option value='En_stock'>En stock</option>
							<option value='En_cours_de_livraison'>En cours de livraison</option>
							<option value='Livrés'>Livrés</option>
							<option value='Livrés_et_payes'>Livrés et payes</option>
							<option value='Planifiés_retour'>Planifiés retour</option>
							<option value='Retournés'>Retournés</option>
						</select>
					</div>
					<div>
						<label className='labelAdd'>Service</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setservice(e.target.value)}
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

export default AddNewColis;
