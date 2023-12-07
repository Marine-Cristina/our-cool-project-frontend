import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CreateBusiness() {
  const navigate = useNavigate();
  const { user_id } = useParams();

  const [userData, setUserData] = useState({
    name: "",
    location: "",
    coordinates: {latitude:"", longitude:""},
    typeOfBusiness: "",
    owner: { user_id },
    isPetFriendly: "",
    isChildFriendly: "",
    isEcoFriendly: "",
    isAccessibilityFriendly: "",
    isVeganFriendly: "",
    contacts: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "latitude" || name === "longitude") {
      setUserData({
        ...userData,
        coordinates: {
          ...userData.coordinates,
          [name]: value,
        },
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    console.log(userData);

    axios
      .post("http://localhost:5005/business", userData)
      .then((response) => {
        setUserData({
          name: "",
          location: "",
          coordinates: "",
          typeOfBusiness: "",
          user: { business_id },
          isPetFriendly: "",
          isChildFriendly: "",
          isEcoFriendly: "",
          isAccessibilityFriendly: "",
          isVeganFriendly: "",
          contacts: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2> Create a business</h2>
          <input
            htmlFor="nameOfBusiness"
            type="text"
            id="nameOfBusiness"
            value={userData.name}
            onChange={handleInputChange}
          >
            Name of the Business
          </input>
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <select
          id="location"
          value={userData.location}
          onChange={handleInputChange}
        >
          <option value="Paris">Paris</option>
          <option value="Burgos">Burgos</option>
        </select>
      </div>
      <div>
          <input
            type="text"
            id="latitude"
            value={userData.coordinates}
            onChange={handleInputChange} >Where is it ?</input>
                <input 
                type="text"
                id="longitude"
                name="longitude"
                value={userData.coordinates.longitude}
                onChange={handleInputChange}>
                </input>
            </div>
      <div>
        <label htmlFor="typeOfBusiness"> what it is ?</label>
        <select
          id="typeOfBusiness"
          value={userData.typeOfBusiness}
          onChange={handleInputChange}
        >
          <option value="hotel">otel</option>
          <option value="restaurant">Restaurant</option>
          <option value="coffee shop">Coffee Shop</option>
          <option value="store">Store</option>
          <option value="musuem">Musuem</option>
          <option value="brand">Brand</option>
          <option value="supermarket">Supermarket</option>
          <option value="transport">Transport</option>
          <option value="workplace">Workplace</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="isPetFriendly">
          <select
            id="isPetFriendly"
            value={userData.isPetFriendly}
            onChange={handleInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isChildFriendly">
          <select
            id="isChildFriendly"
            value={userData.isChildFriendly}
            onChange={handleInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isEcoFriendly">
          <select
            id="isEcoFriendly"
            value={userData.isEcoFriendly}
            onChange={handleInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isAccessibilityFriendly">
          <select
            id="isAccessibilityFriendly"
            value={userData.isAccessibilityFriendly}
            onChange={handleInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isVeganFriendly">
          <select
            id="isVeganFriendly"
            value={userData.isVeganFriendly}
            onChange={handleInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="contacts"> Contact</label>
        <select
          type="text"
          id="contacts"
          value={userData.contacts}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}

export default CreateBusiness;
