import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import TableHead from "../../atome/tableHead";
import DeleteModel from "../../molecule/deleteModel";
import FournisseurTabData from "../../molecule/fournisseurTabData";
import UpdateFournisseur from "../../molecule/updateFournisseur";

const tHead = [
  "FOURNISSEUR ID",
  "NOM SOCIETE",
  "NOM FOURNISSEUR",
  "NUMERO TELEPHONE",
  "ADRESSE SOCIETE",
  "DATE FIN CONTRAT",
  "ACTION",
];

function FournisseurTabBody() {
  const [showDeleteModel, setshowDeleteModel] = useState(false);
  const [updateUserModel, setupdateUserModel] = useState(false);
  const [usersGesPersonnel, setusersGesPersonnel] = useState([]);
  const [idRemove, setidRemove] = useState("");

  const fetchdata = () => {
    axios
      .get("/api/gestionFournisseur/findAll")
      .then(({ data }) => {
        setusersGesPersonnel(data);
      })
      .catch((err) => console.log(err));
  };

  function remove(id) {
    axios
      .delete(`/api/gestionFournisseur/deleteOne/${id}`)
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
            <FournisseurTabData
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
        <UpdateFournisseur
          data={usersGesPersonnel}
          setupdateUserModel={setupdateUserModel}
          reqData={"Fournisseur"}
        />
      )}
    </React.Fragment>
  );
}

export default FournisseurTabBody;
