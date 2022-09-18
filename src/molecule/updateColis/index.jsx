import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const UpdateColis = ({ setupdateUserModel, data, reqData }) => {
  const [dataOfItemToUpdate, setdataOfItemToUpdate] = useState({
    code_a_bare: "",
    nom_du_client: "",
    numero_telephone: "",
    date_de_creation: "",
    code: "",
    etat: "",
    service: "",
  });
  const [code_a_bare, setcode_a_bare] = useState("");
  const [nom_du_client, setnom_du_client] = useState("");
  const [numero_telephone, setnumero_telephone] = useState("");
  const [date_de_creation, setdate_de_creation] = useState("");
  const [code, setcode] = useState("");
  const [etat, setetat] = useState("");
  const [service, setservice] = useState("");

  const getDataOfUserToUpdate = () => {
    var idFromLocalStorage = localStorage.getItem("idOfUserToUpdate");
    for (var i = 0; i < data.length; i++) {
      if (data[i]._id === idFromLocalStorage) {
        setdataOfItemToUpdate(data[i]);
        setcode_a_bare(data[i].fournisseur_id);
        setnom_du_client(data[i].nom_societe);
        setnumero_telephone(data[i].nom_fournisseur);
        setdate_de_creation(data[i].numero_telephone);
        setcode(data[i].date_fin_contrat);
        setetat(data[i].adresse_societe);
        setservice(data[i].adresse_societe);
      }
    }
  };

  const update = () => {
    let dataUpdate = {
      code_a_bare: code_a_bare,
      nom_du_client: nom_du_client,
      numero_telephone: numero_telephone,
      date_de_creation: date_de_creation,
      code: code,
      etat: etat,
      service: service,
    };
    axios
      .put(
        `/api/gestion${reqData}/updateOne/${dataOfItemToUpdate._id}`,
        dataUpdate
      )
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  useLayoutEffect(() => {
    getDataOfUserToUpdate();
  }, []);

  return (
    <div className="addModel flex">
      <div className="modell">
        <h3>Update colis</h3>
        <div className="parent">
          <div>
            <label className="labelAdd">Code a bare</label>
            <input
              defaultValue={dataOfItemToUpdate.code_a_bare}
              className="inputAdd"
              type="text"
              onChange={(e) => setcode_a_bare(e.target.value)}
            />
          </div>
          <div>
            <label className="labelAdd">Nom du client</label>
            <input
              defaultValue={dataOfItemToUpdate.nom_du_client}
              className="inputAdd"
              type="text"
              onChange={(e) => setnom_du_client(e.target.value)}
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
            <label className="labelAdd">Date de creation</label>
            <input
              defaultValue={dataOfItemToUpdate.date_de_creation}
              className="inputAdd"
              type="date"
              onChange={(e) => setdate_de_creation(e.target.value)}
            />
          </div>
          <div>
            <label className="labelAdd">Code</label>
            <input
              defaultValue={dataOfItemToUpdate.code}
              className="inputAdd"
              type="text"
              onChange={(e) => setcode(e.target.value)}
            />
          </div>
          <div>
            <label className="labelAdd">Etat</label>
            <select
              defaultValue={dataOfItemToUpdate.etat}
              className="inputAdd"
              name="cars"
              id="cars"
              onChange={(e) => setetat(e.target.value)}
            >
              <option value="ChoisirRole">Choisir l'etat</option>
              <option value="En_stock">En stock</option>
              <option value="En_cours_de_livraison">
                En cours de livraison
              </option>
              <option value="Livrés">Livrés</option>
              <option value="Livrés_et_payes">Livrés et payes</option>
              <option value="Planifiés_retour">Planifiés retour</option>
              <option value="Retournés">Retournés</option>
            </select>
          </div>
          <div>
            <label className="labelAdd">Service</label>
            <input
              defaultValue={dataOfItemToUpdate.service}
              className="inputAdd"
              type="text"
              onChange={(e) => setservice(e.target.value)}
            />
          </div>
        </div>
        <div className="parentBtn">
          <button
            onClick={() => {
              setupdateUserModel(false);
            }}
            className="AddBtn"
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

export default UpdateColis;
