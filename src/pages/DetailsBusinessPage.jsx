import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import { getTypeOfBusiness } from "../utils/formatters";

const BUSINESS_URL = "http://localhost:5005/businesses";

function DetailsBusiness() {
  const [businessDetails, setBusinessDetails] = useState({});
  const { businessId } = useParams();

  useEffect(() => {
    axios
      .get(`${BUSINESS_URL}/${businessId}`)
      .then((response) => {
        setBusinessDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [businessId]);

  return (
    <div>
      <h1>{businessDetails.name}</h1>
      <h2>{getTypeOfBusiness(businessDetails.typeOfBusiness)}</h2>
      <h2>Located in {businessDetails.location}</h2>
      {businessDetails.coordinates && (
        <div>
          <h3>Coordinates:</h3>
          <p>Latitude: {businessDetails.coordinates.latitude}</p>
          <p>Longitude: {businessDetails.coordinates.longitude}</p>
        </div>
      )}
      {businessDetails.isPetFriendly && (
        <img
          src={pet}
          alt="Pet Friendly"
          style={{ width: "40px", height: "height" || "auto" }}
        />
      )}
      {businessDetails.isChildFriendly && (
        <img
          src={child}
          alt="Child Friendly"
          style={{ width: "40px", height: "height" || "auto" }}
        />
      )}
      {businessDetails.isEcoFriendly && (
        <img
          src={eco}
          alt="Eco Friendly"
          style={{ width: "40px", height: "height" || "auto" }}
        />
      )}
      {businessDetails.isAccessibilityFriendly && (
        <img
          src={accessibility}
          alt="Accessibility Friendly"
          style={{ width: "40px", height: "height" || "auto" }}
        />
      )}
      {businessDetails.isVeganFriendly && (
        <img
          src={vegan}
          alt="Vegan Friendly"
          style={{ width: "40px", height: "height" || "auto" }}
        />
      )}
    </div>
  );
}

export default DetailsBusiness;
