import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import TableHead from "../../atome/tableHead";

import DeleteModel from "../../molecule/deleteModel";
import RunSheetTabData from "../../molecule/runSheetTabData";
import UpdateRunsheet from "../../molecule/updateRunsheet";

const tHead = [
  "CODE A BARE",
  "NOM DU LIVREUR",
  "DATE DE CREATION",
  "ETAT DEBRIEF",
  "PRIX TOTAL",
  "SERVICE",
];

function RunSheetTabBody() {
  const [showDeleteModel, setshowDeleteModel] = useState(false);
  const [updateUserModel, setupdateUserModel] = useState(false);
  const [usersGesPersonnel, setusersGesPersonnel] = useState([]);
  const [idRemove, setidRemove] = useState("");

  const fetchdata = () => {
    axios
      .get("/api/gestionRunsheet/findAll")
      .then(({ data }) => {
        console.log(data);
        setusersGesPersonnel(data);
      })
      .catch((err) => console.log(err));
  };

  function remove(id) {
    axios
      .delete(`/api/gestionRunsheet/deleteOne/${id}`)
      .then(() => {
        fetchdata();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const idOfItemToDelete = (id) => {
    setidRemove(id);
  };

  useLayoutEffect(() => {
    fetchdata();
  }, []);

  return (
    <React.Fragment>
      <table className="usersTab">
        <TableHead head={tHead} />
        <tbody>
          {usersGesPersonnel.map((user, i) => (
            <RunSheetTabData
              data={user}
              key={i}
              setshowDeleteModel={setshowDeleteModel}
              setupdateUserModel={setupdateUserModel}
              idOfItemToDelete={idOfItemToDelete}
            />
          ))}
        </tbody>
      </table>
      {showDeleteModel && (
        <DeleteModel
          setshowDeleteModel={setshowDeleteModel}
          remove={remove}
          idRemove={idRemove}
        />
      )}
      {updateUserModel && (
        // <UpdateUser
        // 	data={usersGesPersonnel}
        // 	setupdateUserModel={setupdateUserModel}
        // 	reqData={"Colis"}
        // />
        <UpdateRunsheet
          data={usersGesPersonnel}
          setupdateUserModel={setupdateUserModel}
          reqData={"Colis"}
        />
      )}
    </React.Fragment>
  );
}

export default RunSheetTabBody;
