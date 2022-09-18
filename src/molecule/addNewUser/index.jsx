import React, { useState } from "react";
import axios from "axios";

import "./style.css";

function AddNewUser({ setshowAddModel, data }) {
	const [id, setid] = useState("");
	const [role, setrole] = useState("");
	const [hub, sethub] = useState("");
	const [cin, setcin] = useState("");
	const [nom, setnom] = useState("");
	const [prenom, setprenom] = useState("");
	const [tel, settel] = useState("");
	const [mail, setmail] = useState("");
	const [permis, setpermis] = useState("");
	const [matricule_veh, setmatricule_veh] = useState("");
	const [carte_grise, setcarte_grise] = useState("");
	const [photo, setphoto] = useState("");

	const uploadeImage = (file) => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "lzyjffjz");
		return axios.post(
			"http://api.cloudinary.com/v1_1/outibois/image/upload",
			formData
		);
	};

	const addUser = () => {
		let user = {
			id: id,
			cin: cin,
			nom: nom,
			prenom: prenom,
			role: role,
			tel: tel,
			mail: mail,
			permis: permis,
			hub: hub,
			matricule_veh: matricule_veh,
			carte_grise: carte_grise,
			photo: "",
		};
		uploadeImage(photo)
			.then((elem) => {
				user.photo = elem.data.public_id;
				axios.post(`/api/gestion${data}/add`, user);
			})
			.then(() => {
				window.location.reload();
				setshowAddModel(false);
				console.log("user added successfully !");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='addModel flex'>
			<div className='modell'>
				<h3>Ajouter Personnel</h3>
				<div className='parent'>
					<div>
						<label className='labelAdd'>Role Personnel</label>
						<select
							className='inputAdd'
							name='cars'
							id='cars'
							onChange={(e) => setrole(e.target.value)}
						>
							<option value='ChoisirRole'>Choisir Role</option>
							<option value='gérant'>Gérant</option>
							<option value='livreur'>livreur</option>
							<option value='commercial'>Commercial</option>
							<option value='magasiné'>Magasiné</option>
						</select>
					</div>
					<div>
						<label className='labelAdd'>Nom du Personnel</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setnom(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Prénom du Personnel</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setprenom(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Numéro CIN</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setcin(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Numéro du téléphone</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => settel(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Adresse E-mail</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setmail(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Permis</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setpermis(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>ID</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setid(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Matricule Vehicule</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setmatricule_veh(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Carte Grise</label>
						<input
							className='inputAdd'
							type='text'
							onChange={(e) => setcarte_grise(e.target.value)}
						/>
					</div>
					<div>
						<label className='labelAdd'>Hub</label>
						<select
							className='inputAdd'
							name='cars'
							id='cars'
							onChange={(e) => sethub(e.target.value)}
						>
							<option value='ChoisirRole'>Choisir Hub</option>
							<option value='Gérant'>Gérant</option>
							<option value='livreur'>livreur</option>
							<option value='Commercial'>Commercial</option>
							<option value='Magasiné'>Magasiné</option>
						</select>
					</div>
					<div>
						<label className='labelAdd'>Choisir image</label>
						<input
							className='inputAdd'
							type='file'
							onChange={(e) => setphoto(e.target.files[0])}
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

export default AddNewUser;
