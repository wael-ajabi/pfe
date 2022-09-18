import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const UpdateRunsheet = ({ setupdateUserModel, data, reqData }) => {
  const [dataOfItemToUpdate, setdataOfItemToUpdate] = useState({
    code_a_bare: "",
    nom_du_livreur: "",
    date_de_creation: "",
    etat_debrief: "",
    prix_total: "",
  });
  const [code_a_bare, setcode_a_bare] = useState(data.code_a_bare);
  const [nom_du_livreur, setnom_du_livreur] = useState(data.nom_du_livreur);
  const [date_de_creation, setdate_de_creation] = useState(
    data.date_de_creation
  );
  const [etat_debrief, setetat_debrief] = useState(data.etat_debrief);
  const [prix_total, setprix_total] = useState(data.prix_total);

  const getDataOfUserToUpdate = () => {
    var idFromLocalStorage = localStorage.getItem("idOfUserToUpdate");
    console.log(idFromLocalStorage);
    for (var i = 0; i < data.length; i++) {
      if (data[i]._id === idFromLocalStorage) {
        setdataOfItemToUpdate(data[i]);
        console.log("-------------", data[i]);
        setcode_a_bare(data[i].code_a_bare);
        setnom_du_livreur(data[i].nom_du_livreur);
        setdate_de_creation(data[i].date_de_creation);
        setetat_debrief(data[i].etat_debrief);
        setprix_total(data[i].prix_total);
      }
    }
  };

  const update = () => {
    let dataUpdate = {
      code_a_bare: code_a_bare,
      nom_du_livreur: nom_du_livreur,
      date_de_creation: date_de_creation,
      etat_debrief: etat_debrief,
      prix_total: prix_total,
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
        <h3>Update runsheet</h3>
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
            <label className="labelAdd">Nom du livreur</label>
            <input
              defaultValue={dataOfItemToUpdate.nom_du_livreur}
              className="inputAdd"
              type="text"
              onChange={(e) => setnom_du_livreur(e.target.value)}
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
            <label className="labelAdd">Etat debrief</label>
            <input
              defaultValue={dataOfItemToUpdate.etat_debrief}
              className="inputAdd"
              type="text"
              onChange={(e) => setetat_debrief(e.target.value)}
            />
          </div>
          <div>
            <label className="labelAdd">Prix total</label>
            <input
              defaultValue={dataOfItemToUpdate.prix_total}
              className="inputAdd"
              type="text"
              onChange={(e) => setprix_total(e.target.value)}
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

export default UpdateRunsheet;
