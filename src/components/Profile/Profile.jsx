import React from "react";

import "./profile.css";

function Profile({ name, photo }) {
  return (
    <div className="profile-div">
      <div className="circle-profile">
        <img className="profile-phot" src={photo} alt="photo" />
      </div>
      <h3 className="profile-name">{name}</h3>
    </div>
  );
}

export default Profile;
