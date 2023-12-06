import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AllBusiness() {
  const [business, setBusiness] = useState([]);
  console.log('hello business')

  const getAllBusiness = () => {
    axios
      .get(`${API_URL}/businesses`)
      .then((response) => setBusiness(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllBusiness();
  }, []);

  return (
    <div>
      {business && business.map((business, i) => {
        return (
          <div key={i}>
            <Link to={`/businesses/${business._id}`}>
           </Link>
           <h2>{business.name}</h2>
            <h2>{business.location}</h2>
            <h2>{business.typeOfBusiness}</h2>
            <h2>{business.isPetFriendly && <img src="pet_app.avif" alt="Pet Friendly" />}</h2>
            <h2>{business.isChildFriendly && <img src="baby_app.png" alt = "Kid Friendly"/>}</h2>
            <h2>{business.isEcoFriendly && <img src = "ecofriendly_app" alt="Eco Friendly"/>}</h2>
            <h2>{business.isAccessibilityFriendly && <img src="handicap_app" alt="Accessibility Friendly"/>}</h2>
            <h2>{business.isVeganFriendly && <img src="vegan_app" alt="Vegan Friendly"/>}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default AllBusiness;
