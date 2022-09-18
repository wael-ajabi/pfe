import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const UpdateFournisseur = ({ setupdateUserModel, data, reqData }) => {
  const [dataOfItemToUpdate, setdataOfItemToUpdate] = useState({
    fournisseur_id: "",
    nom_societe: "",
    numero_telephone: "",
    nom_fournisseur: "",
    date_fin_contrat: "",
    adresse_societe: "",
  });
  const [fournisseur_id, setfournisseur_id] = useState("");
  const [nom_societe, setnom_societe] = useState("");
  const [nom_fournisseur, setnom_fournisseur] = useState("");
  const [numero_telephone, setnumero_telephone] = useState("");
  const [date_fin_contrat, setdate_fin_contrat] = useState("");
  const [adresse_societe, setadresse_societe] = useState("");

  const getDataOfUserToUpdate = () => {
    var idFromLocalStorage = localStorage.getItem("idOfUserToUpdate");
    console.log(idFromLocalStorage);
    for (var i = 0; i < data.length; i++) {
      if (data[i].fournisseur_id === idFromLocalStorage) {
        setdataOfItemToUpdate(data[i]);
        console.log("-------------", data[i]);
        setfournisseur_id(data[i].fournisseur_id);
        setnom_societe(data[i].nom_societe);
        setnom_fournisseur(data[i].nom_fournisseur);
        setnumero_telephone(data[i].numero_telephone);
        setdate_fin_contrat(data[i].date_fin_contrat);
        setadresse_societe(data[i].adresse_societe);
      }
    }
  };

  const update = () => {
    let dataUpdate = {
      fournisseur_id: fournisseur_id,
      nom_societe: nom_societe,
      nom_fournisseur: nom_fournisseur,
      numero_telephone: numero_telephone,
      date_fin_contrat: date_fin_contrat,
      adresse_societe: adresse_societe,
    };
    axios
      .put(
        `/api/gestion${reqData}/updateOne/${dataOfItemToUpdate._id}`,
        dataUpdate
      )
      .then(() => {
        window.location.reload();
        console.log(dataUpdate);
      })
      .catch((err) => console.log(err));
  };

  useLayoutEffect(() => {
    getDataOfUserToUpdate();
  }, []);

  return (
    <div className="addModel flex">
      <div className="modell">
        <h3>Update Fournisseur</h3>
        <div className="parent">
          <div>
            <label className="labelAdd">Fournisseur id</label>
            <input
              defaultValue={dataOfItemToUpdate.fournisseur_id}
              className="inputAdd"
              type="text"
              onChange={(e) => setfournisseur_id(e.target.value)}
            />
          </div>
          <div>
            <label className="labelAdd">Nom du societe</label>
            <input
              defaultValue={dataOfItemToUpdate.nom_societe}
              className="inputAdd"
              type="text"
              onChange={(e) => setnom_societe(e.target.value)}
            />
          </div>

          <div>
            <label className="labelAdd">Nom fournisseur</label>
            <input
              defaultValue={dataOfItemToUpdate.nom_fournisseur}
              className="inputAdd"
              type="text"
              onChange={(e) => setnom_fournisseur(e.target.value)}
            />
          </div>
          <div>
            <label className="labelAdd">Numero telephone</label>
            <input
              defaultValue={dataOfItemToUpdate.numero_telephone}
              className="inputAdd"
              type="text"
              onChange={(e) => setnumero_telephone(e.target.value)}
            />
          </div>
          <div>
            <label className="labelAdd">date_fin_contrat</label>
            <input
              defaultValue={dataOfItemToUpdate.date_fin_contrat}
              className="inputAdd"
              type="date"
              onChange={(e) => setdate_fin_contrat(e.target.value)}
            />
          </div>
          <div>
            <label className="labelAdd">adresse_societe</label>
            <input
              defaultValue={dataOfItemToUpdate.adresse_societe}
              className="inputAdd"
              type="text"
              onChange={(e) => setadresse_societe(e.target.value)}
            />
          </div>
        </div>
        <div className="parentBtn">
          <button
            className="AddBtn"
            onClick={() => {
              setupdateUserModel(false);
            }}
          >
            Annuler
          </button>
          <button className="AddBtn" id="ajouter" onClick={update}>
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateFournisseur;
