import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import TableHead from "../../atome/tableHead";
import ColisTabData from "../../molecule/colisTabData";
import DeleteModel from "../../molecule/deleteModel";
import UpdateColis from "../../molecule/updateColis";

const tHead = [
  "CODE A BARE",
  "NOM DU CLIENT",
  "NUMERO TELEPHONE",
  "DATE DE CREATION",
  "CODE",
  "ETAT",
  "SERVICE",
  "ACTION",
];

function ColisTabBody() {
  const [showDeleteModel, setshowDeleteModel] = useState(false);
  const [updateUserModel, setupdateUserModel] = useState(false);
  const [usersGesPersonnel, setusersGesPersonnel] = useState([]);
  const [idRemove, setidRemove] = useState("");

  const fetchdata = () => {
    axios
      .get("/api/gestionColis/findAll")
      .then(({ data }) => {
        setusersGesPersonnel(data);
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
          {usersGesPersonnel.map((user, i) => (
            <ColisTabData
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
          data={usersGesPersonnel}
          setupdateUserModel={setupdateUserModel}
          reqData={"Colis"}
        />
      )}
    </React.Fragment>
  );
}

export default ColisTabBody;
