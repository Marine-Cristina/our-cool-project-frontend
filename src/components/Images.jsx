import React from "react";

function ImageComponent() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/pet.png"}
        alt="pet"
        style={{ width: "100px", height: "auto" }}
      />
    </div>
  );
}

export default ImageComponent;
