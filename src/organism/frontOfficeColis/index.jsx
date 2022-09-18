import React from "react";
import AddUserLabel from "../../molecule/addUserLabel";
import "./style.css";

const FrontOffiiceCréesColis = () => {
	return (
		<div>
			<AddUserLabel text={"Ajouter nouveaux colis"} />
			<div className='flexStart infoLabel'>Information Colis</div>
			<div className='flexColStart contentFrontOffice'>
				<div className='flexBetween'>
					<div className='flexColStart'>
						<label>Service</label>
						<select
							className='inputAdd inputPosition firstRow'
							name='cars'
							id='cars'
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
					</div>
					<div className='flexColStart'>
						<label>CDD</label>
						<input
							type='text'
							name=''
							id=''
							className='inputAdd inputPosition firstRow'
						/>
					</div>
					<div className='flexColStart'>
						<label>Mode de payement</label>
						<select
							className='inputAdd inputPosition firstRow'
							name='cars'
							id='cars'
						>
							<option value='ChoisirRole'>En ligne</option>
							<option value='En_cours_de_livraison'>
								A la livraison
							</option>
						</select>
					</div>
				</div>
				<div className='flexBetween'>
					<div className='flexColStart'>
						<label>Désignation</label>
						<input
							type='text'
							name=''
							id=''
							className='inputAdd inputPosition secondRow'
						/>
					</div>
					<div className='flexColStart'>
						<label>Nombre de produit</label>
						<input
							type='text'
							name=''
							id=''
							className='inputAdd inputPosition secondRow'
						/>
					</div>
				</div>
				<div className='flexBetween'>
					<div className='flexColStart'>
						<label>Largeur</label>
						<input
							type='text'
							name=''
							id=''
							className='inputAdd size'
						/>
					</div>
					<div className='flexColStart'>
						<label>Longeur</label>
						<input
							type='text'
							name=''
							id=''
							className='inputAdd size'
						/>
					</div>
					<div className='flexColStart'>
						<label>Hauteur</label>
						<input
							type='text'
							name=''
							id=''
							className='inputAdd size'
						/>
					</div>
					<div className='flexColStart'>
						<label>Poids</label>
						<input
							type='text'
							name=''
							id=''
							className='inputAdd size'
						/>
					</div>
				</div>
				<div className='flexStart'>
					<div className='flexColStart'>
						<label>Remarque(facultatif)</label>
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							className='thirdRow'
						></textarea>
					</div>
				</div>
				<div className='bottom flexEnd'>
					<button type='submit' className='AddBtn addColisBtn'>
						Ajouter Colis
					</button>
				</div>
			</div>
		</div>
	);
};

export default FrontOffiiceCréesColis;
