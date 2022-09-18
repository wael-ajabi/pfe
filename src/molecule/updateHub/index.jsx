import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const UpdateHub = ({ setupdateUserModel, data, reqData }) => {
  const [dataOfItemToUpdate, setdataOfItemToUpdate] = useState({
    hub_id: "",
    titre_hub: "",
    gouvernorat: "",
    adresse: "",
  });
  const [hub_id, sethub_id] = useState("");
  const [titre_hub, settitre_hub] = useState("");
  const [gouvernorat, setgouvernorat] = useState("");
  const [adresse, setadresse] = useState("");

  const getDataOfUserToUpdate = () => {
    var idFromLocalStorage = localStorage.getItem("idOfUserToUpdate");
    console.log(idFromLocalStorage);
    for (var i = 0; i < data.length; i++) {
      if (data[i]._id === idFromLocalStorage) {
        console.log("------------", data[i]);
        setdataOfItemToUpdate(data[i]);
        sethub_id(data[i].fournisseur_id);
        settitre_hub(data[i].nom_societe);
        setgouvernorat(data[i].nom_fournisseur);
        setadresse(data[i].numero_telephone);
      }
    }
  };

  const update = () => {
    let dataUpdate = {
      hub_id: hub_id,
      titre_hub: titre_hub,
      gouvernorat: gouvernorat,
      adresse: adresse,
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
        <h3>Update Hub</h3>
        <div className="parent">
          <div>
            <label className="labelAdd">Hub id</label>
            <input
              defaultValue={dataOfItemToUpdate.hub_id}
              className="inputAdd"
              type="text"
              onChange={(e) => sethub_id(e.target.value)}
            />
          </div>
          <div>
            <label className="labelAdd">Titre hub</label>
            <input
              defaultValue={dataOfItemToUpdate.titre_hub}
              className="inputAdd"
              type="text"
              onChange={(e) => settitre_hub(e.target.value)}
            />
          </div>

          <div>
            <label className="labelAdd">Adresse</label>
            <input
              defaultValue={dataOfItemToUpdate.adresse}
              className="inputAdd"
              type="text"
              onChange={(e) => setadresse(e.target.value)}
            />
          </div>
          <div>
            <label className="labelAdd">Gouvernorat</label>
            <input
              defaultValue={dataOfItemToUpdate.gouvernorat}
              className="inputAdd"
              type="text"
              onChange={(e) => setgouvernorat(e.target.value)}
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

export default UpdateHub;
