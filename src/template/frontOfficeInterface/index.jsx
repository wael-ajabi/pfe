import React from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import SideBarFrontOffice from "../../organism/frontOfficeSideBare";
import Navbar from "../../organism/navbar";
import ColisManager from "../../organism/coliesManager";
import FrontOffiiceCréesColis from "../../organism/frontOfficeColis";
import Profile from "../../organism/profile";
import Dashboard from "../../organism/dashboard";

function FrontOfficeInterface() {
	return (
		<>
			<div className='backOfficeInterface '>
				<SideBarFrontOffice />
				<div className='content'>
					<Navbar />
					<Routes>
						<Route
							path='/gestioncolis'
							element={<ColisManager />}
						></Route>
						<Route
							path='/ajouterColis'
							element={<FrontOffiiceCréesColis />}
						></Route>
						<Route
							path='/dashboard'
							element={<Dashboard />}
						></Route>
						<Route
							path='/fournisseurProfile'
							element={
								<Profile
									name={"Emna louati"}
									email={"emnalouati@gmail.com"}
									id={"emna1245"}
									phone={"25136485"}
									role={"fournisseur"}
									imgSrc={
										"https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
									}
								/>
							}
						></Route>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default FrontOfficeInterface;
