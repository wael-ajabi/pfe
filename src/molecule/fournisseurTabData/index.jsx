import React from "react";
import "./style.css";
import Icon from "../../atome/icon";

function FournisseurTabData({
  data,
  setshowDeleteModel,
  setupdateUserModel,
  idOfItemToDelete,
}) {
  const setTwoStatesDelete = () => {
    setshowDeleteModel(true);
    idOfItemToDelete(data._id);
  };
  const setTwoStatesUpdate = () => {
    setupdateUserModel(true);
    console.log(data);
    var idd = data.fournisseur_id;
    localStorage.setItem("idOfUserToUpdate", idd);
  };

  // fournisseur_id: String,
  // 	cin: Number,
  // 	nom_societe: String,
  // 	nom_fournisseur: String,
  // 	numero_telephone: String,
  // 	tel: Number,
  // 	adresse_societe: String,
  // 	date_fin_contrat: String,

  return (
    <tr className="dataRow">
      <td>{data.fournisseur_id}</td>
      <td className="ImageAndFullname">{data.nom_societe}</td>
      <td>{data.nom_fournisseur}</td>
      <td>{data.numero_telephone}</td>
      <td>{data.adresse_societe}</td>
      <td>{data.date_fin_contrat}</td>
      <td className="flexStart actionIcons">
        <div onClick={() => setTwoStatesUpdate()}>
          <Icon
            path={
              "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            }
            fill={"#a9a2f5"}
          />
        </div>
        <div onClick={() => setTwoStatesDelete()}>
          <Icon
            path={
              "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            }
            fill={"#ef7d7e"}
          />
        </div>
      </td>
    </tr>
  );
}

export default FournisseurTabData;
