import React from "react";

function Profile({ name, photo }) {
  console.log(photo);
  return (
    <div>
      <img src={photo} alt="photo" />
      <h3>{name}</h3>
    </div>
  );
}

export default Profile;
