import axios from "axios";
import React, { useState, useEffect } from "react";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.avif";
import vegan from "/vegan.png";

const API_URL = "http://localhost:5005/";
const BUSINESSES_URL = `${API_URL}businesses/`;

function AllBusinesses() {
  const [businesses, setBusinesses] = useState([]);

  const getAllBusiness = () => {
    axios
      .get(BUSINESSES_URL)
      .then((response) => setBusinesses(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllBusiness();
  }, []);

  return (
    <div>
      {businesses &&
        businesses.map((business, i) => {
          return (
            <div key={i}>
              <h2>{business.name}</h2>
              <h2>{business.location}</h2>
              <h2>{business.typeOfBusiness}</h2>
              <h2>
                {business.isPetFriendly && <img src={pet} alt="Pet Friendly" />}
              </h2>
              <h2>
                {business.isChildFriendly && (
                  <img src={child} alt="Kid Friendly" />
                )}
              </h2>
              <h2>
                {business.isEcoFriendly && <img src={eco} alt="Eco Friendly" />}
              </h2>
              <h2>
                {business.isAccessibilityFriendly && (
                  <img src={accessibility} alt="Accessibility Friendly" />
                )}
              </h2>
              <h2>
                {business.isVeganFriendly && (
                  <img src={vegan} alt="Vegan Friendly" />
                )}
              </h2>
            </div>
          );
        })}
    </div>
  );
}

export default AllBusinesses;
