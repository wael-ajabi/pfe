import React from "react";
import "./style.css";

function DeleteModel({ setshowDeleteModel, remove, idRemove }) {
  const deleteAndClose = () => {
    remove(idRemove);
    setshowDeleteModel(false);
    window.location.reload();
  };
  return (
    <div className="modelBackGround flex">
      <div className="deleteModel">
        <div className="deleteLabel flexStart">Supprimer</div>
        <div className="deleteText flexStart">
          Voulez vous vraiment supprimer ce ligne ?
        </div>
        <div className="buttons flexEnd">
          <button className="cancel" onClick={() => setshowDeleteModel(false)}>
            Annuler
          </button>
          <button
            className="delete"
            onClick={() => {
              deleteAndClose();
            }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModel;
