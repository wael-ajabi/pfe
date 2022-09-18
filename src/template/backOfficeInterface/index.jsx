import React from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "../../organism/sidebar";
import Navbar from "../../organism/navbar";
import UsersManager from "../../organism/usersManager";
import FournisseurManager from "../../organism/fournisseurManager";
import ColisManager from "../../organism/coliesManager";
import RunSheetManager from "../../organism/runSheetManager";
import HubManager from "../../organism/HubManager";
import Profile from "../../organism/profile";
import Dashboard from "../../organism/dashboard";

function BackOfficeInterface() {
  return (
    <>
      <div className="backOfficeInterface ">
        <SideBar />
        <div className="content">
          <Navbar/>
          <Routes>
            <Route
              path="/adminProfile"
              element={
                <Profile
                  name={"Wael Ajabi"}
                  email={"waelAjabi@gmail.com"}
                  id={"wael1245"}
                  phone={"22564896"}
                  role={"Administrateur"}
                  imgSrc={
					"https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
				}
                />
              }
            ></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/gestionPersonnel" element={<UsersManager />}></Route>
            <Route
              path="/gestionfournisseurs"
              element={<FournisseurManager />}
            ></Route>
            <Route path="/gestioncolis" element={<ColisManager />}></Route>
            <Route
              path="/gestionrunsheet"
              element={<RunSheetManager />}
            ></Route>
            <Route path="/gestionhub" element={<HubManager />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default BackOfficeInterface;
