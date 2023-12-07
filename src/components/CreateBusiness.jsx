import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CreateBusiness() {
  const navigate = useNavigate();
  const { business_id } = useParams();
  const [userData, setUserData] = useState({
    name: "",
    location: "",
    coordinates: [0, 0],
    typeOfBusiness: "",
    user: { business_id },
    isPetFriendly: "",
    isChildFriendly: "",
    isEcoFriendly: "",
    isAccessibilityFriendly: "",
    isVeganFriendly: "",
    contacts: "",
  });

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
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
        navigate("/businesscreate"); // what's happening when the user create a business after --> redirecting on this page
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handelSubmit}>
      <div>
        <h2> Create a business</h2>
        <label htmlFor="nameOfBusiness"> Name of the Business</label>
        <select
          type="text"
          id="nameOfBusiness"
          value={userData.name}
          onChange={handelInputChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <select
          id="location"
          value={userData.location}
          onChange={handelInputChange}
        >
          <option value="Paris">Paris</option>
          <option value="Burgos">Burgos</option>
        </select>
      </div>
      <div>
        <label htmlFor="coordinates"> Where is it ?</label>
        <select
          type="text"
          id="locationOfBusiness"
          value={userData.coordinates}
          onChange={handelInputChange}
        />
      </div>
      <div>
        <label htmlFor="typeOfBusiness"> what it is ?</label>
        <select
          id="typeOfBusiness"
          value={userData.typeOfBusiness}
          onChange={handelInputChange}
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
            onChange={handelInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isChildFriendly">
          <select
            id="isChildFriendly"
            value={userData.isChildFriendly}
            onChange={handelInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isEcoFriendly">
          <select
            id="isEcoFriendly"
            value={userData.isEcoFriendly}
            onChange={handelInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isAccessibilityFriendly">
          <select
            id="isAccessibilityFriendly"
            value={userData.isAccessibilityFriendly}
            onChange={handelInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isVeganFriendly">
          <select
            id="isVeganFriendly"
            value={userData.isVeganFriendly}
            onChange={handelInputChange}
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
          onChange={handelInputChange}
        />
      </div>
    </form>
  );
}

export default CreateBusiness;
