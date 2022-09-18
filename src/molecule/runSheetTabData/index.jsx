import React from "react";
import "./style.css";
import Icon from "../../atome/icon";

// "CODE A BARE",
// 	"NOM DU LIVREUR",
// 	"DATE DE CREATION",
// 	"ETAT DEBRIEF",
// 	"PRIX TOTAL",

function RunSheetTabData({
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
    var idd = data._id;
    localStorage.setItem("idOfUserToUpdate", idd);
  };

  return (
    <tr className="dataRow">
      <td>{data.code_a_bare}</td>
      <td className="ImageAndFullname">{data.nom_du_livreur}</td>
      <td>{data.date_de_creation}</td>
      <td>{data.etat_debrief}</td>
      <td>{data.prix_total}</td>
      <td className="flexStart actionIcons">
        <div onClick={() => setTwoStatesUpdate()}>
          <Icon
            path={
              "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            }
            fill={"#ffb46d"}
          />
        </div>
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

export default RunSheetTabData;
