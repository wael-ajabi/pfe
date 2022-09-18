import React from "react";
import "./style.css";

const Dashboard = () => {
  return (
    <div className="dashboardcontainer flexCol">
      <div className="bienvenue">Bienvenue à DELISAS</div>
      <img
        src="https://media.discordapp.net/attachments/902991650727538769/964879352326144000/image_2022-04-16_142353994-removebg-preview.png"
        alt=""
        srcSet=""
      />
      <div className="discription">La mélieure service du livraison</div>
      <div className="flex">
        <video
          loading="lazy"
          muted="muted"
          src="https://cdnl.iconscout.com/lottie/premium/thumb/delivery-man-loading-parcels-in-truck-3773095-3233933.mp4"
          width="299.6470588235294"
          height="299.6470588235294"
          type="video/mp4"
          autoPlay="autoPlay"
          loop="loop"
        ></video>
        <video
          loading="lazy"
          muted="muted"
          src="https://cdnl.iconscout.com/lottie/premium/thumb/delivery-location-3571460-3025919.mp4"
          width="281.5"
          height="281.5"
          type="video/mp4"
          autoPlay="autoPlay"
          loop="loop"
        ></video>
        <video
          loading="lazy"
          muted="muted"
          src="https://cdnl.iconscout.com/lottie/premium/thumb/delivery-guy-finding-delivery-location-3573264-3070285.mp4"
          width="532.7058823529411"
          height="299.6470588235294"
          type="video/mp4"
          autoPlay="autoPlay"
          loop="loop"
        ></video>
      </div>
    </div>
  );
};

export default Dashboard;
