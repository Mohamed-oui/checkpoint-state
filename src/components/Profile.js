import React from "react";

const Profile = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>{props.name}</h1>
      <img
        src={props.imgsrc}
        alt=""
        style={{ height: "400px", width: "400px", marginLeft: "35%" }}
      />
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        {props.profession}
      </p>
    </div>
  );
};

export default Profile;
