import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import TableHead from "../../atome/tableHead";
import DeleteModel from "../../molecule/deleteModel";
import HubTabData from "../../molecule/HubTabData";
import UpdateHub from "../../molecule/updateHub";

const tHead = ["HUB ID", "TITRE HUB", "ADRESSE", "GOUVERNERAT", "ACTION"];

function HubTabBody() {
  const [showDeleteModel, setshowDeleteModel] = useState(false);
  const [updateUserModel, setupdateUserModel] = useState(false);
  const [usersGesPersonnel, setusersGesPersonnel] = useState([]);
  const [idRemove, setidRemove] = useState("");

  const fetchdata = () => {
    axios
      .get("/api/gestionHub/findAll")
      .then(({ data }) => {
        console.log(data);
        setusersGesPersonnel(data);
      })
      .catch((err) => console.log(err));
  };

  function remove(id) {
    axios
      .delete(`/api/gestionHub/deleteOne/${id}`)
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
            <HubTabData
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
        <UpdateHub
          data={usersGesPersonnel}
          setupdateUserModel={setupdateUserModel}
          reqData={"Hub"}
        />
      )}
    </React.Fragment>
  );
}

export default HubTabBody;
