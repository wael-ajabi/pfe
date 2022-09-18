import React from "react";
import "./style.css";
const Profile = ({ name, email, phone, role, id, imgSrc }) => {
  return (
    <div className="profileContainer flex">
      <div className="profileImage">
        <img src={imgSrc} alt="" srcSet="" />
      </div>
      <div className="profileInfos FlexColStart">
        <div className="profilefullName">{name}</div>
        <div className="userRole">{role}</div>
        <div className="flexStart ">
          <p className="aboutLabel">About</p>
        </div>
        <div className="aboutInfos flexBetween">
          <div className="flexColStart">
            <p className="aboutInfo">User ID</p>
            <p className="aboutInfo">Name</p>
            <p className="aboutInfo">Email</p>
            <p className="aboutInfo">Phone</p>
            <p className="aboutInfo">Role</p>
          </div>
          <div className="flexColStart infoVal">
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
