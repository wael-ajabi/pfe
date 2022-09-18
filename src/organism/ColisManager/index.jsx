import React, { useState } from "react";
import "./style.css";
import Icon from "../../atome/icon";
import GestionPersonnel from "../../molecule/gestionPersonel";
import ColisTabBody from "../colisTabBody";
import AddNewUser from "../../molecule/addNewUser";

const ColisManager = () => {
  const [showAddModel, setshowAddModel] = useState(false);

  return (
    <div>
      <h3 className="simpleText">Statistique</h3>
      <div className="parentColis">
        <div className="flex flexStart">
          <div className="flex flexEnd">
            <Icon
              path={
                "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              }
              fill={"#a9a2f5"}
            />
          </div>
          <div className="numAndText">
            <h2 className="numStat">25</h2>
            <p className="textStat">manager</p>
          </div>
        </div>
        <div className="flex flexStart">
          <div className="flex flexEnd">
            <Icon
              path={
                "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              }
              fill={"#3d6bd6"}
            />
          </div>
          <div className="numAndText">
            <h2 className="numStat">25</h2>
            <p className="textStat">manager</p>
          </div>
        </div>
        <div className="flex flexStart">
          <div className="flex flexEnd">
            <Icon
              path={
                "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              }
              fill={"#42d7be"}
            />
          </div>
          <div className="numAndText">
            <h2 className="numStat">25</h2>
            <p className="textStat">manager</p>
          </div>
        </div>
        <div className="flex flexStart">
          <div className="flex flexEnd">
            <Icon
              path={
                "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              }
              fill={"#42d773"}
            />
          </div>
          <div className="numAndText">
            <h2 className="numStat">25</h2>
            <p className="textStat">manager</p>
          </div>
        </div>
        <div className="flex flexStart">
          <div className="flex flexEnd">
            <Icon
              path={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}
              fill={"#ee932b"}
            />
          </div>
          <div className="numAndText">
            <h2 className="numStat">25</h2>
            <p className="textStat">manager</p>
          </div>
        </div>
        <div className="flex flexStart">
          <div className="flex flexEnd">
            <Icon
              path={
                "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
              fill={"#42d773"}
            />
          </div>
          <div className="numAndText">
            <h2 className="numStat">25</h2>
            <p className="textStat">manager</p>
          </div>
        </div>
        <div className="flex flexStart">
          <div className="flex flexEnd">
            <Icon
              path={
                "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              }
              fill={"#ee932b"}
            />
          </div>
          <div className="numAndText">
            <h2 className="numStat">25</h2>
            <p className="textStat">manager</p>
          </div>
        </div>
        <div className="flex flexStart">
          <div className="flex flexEnd">
            <Icon
              path={
                "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }
              fill={"#ee4b2b"}
            />
          </div>
          <div className="numAndText">
            <h2 className="numStat">25</h2>
            <p className="textStat">manager</p>
          </div>
        </div>
      </div>
      <GestionPersonnel
        setshowAddModel={setshowAddModel}
        text={"Gestion des Colis"}
        role={"Colis"}
      />
      <ColisTabBody />
      {showAddModel && (
        <AddNewUser setshowAddModel={setshowAddModel} data={"Colis"} />
      )}
    </div>
  );
};

export default ColisManager;
