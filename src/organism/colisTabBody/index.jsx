import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import TableHead from "../../atome/tableHead";
import UserTabData from "../../molecule/userTabData";
import DeleteModel from "../../molecule/deleteModel";
import UpdateColis from "../../molecule/updateColis";

const tHead = [
  "CODE A BARRES",
  "NOM DU CLIENT",
  "NUMERO DE THELEPHONE",
  "DATE DE CREATION",
  "COD",
  "ETAT",
  "SERVICE",
  "ACTION",
];

function ColisTabBody() {
  const [showDeleteModel, setshowDeleteModel] = useState(false);
  const [updateUserModel, setupdateUserModel] = useState(false);
  const [dataGestColis, setdataGestColis] = useState([]);
  const [idRemove, setidRemove] = useState("");

  const fetchdata = () => {
    axios
      .get("/api/gestionColis/findAll")
      .then(({ data }) => {
        setdataGestColis(data);
      })
      .catch((err) => console.log(err));
  };

  function remove(id) {
    axios
      .delete(`/api/gestionColis/deleteOne/${id}`)
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
          {dataGestColis.map((user, i) => (
            <UserTabData
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

        <UpdateColis
          data={dataGestColis}
          setupdateUserModel={setupdateUserModel}
          reqData={"Colis"}
        />
      )}
    </React.Fragment>
  );
}

export default ColisTabBody;
