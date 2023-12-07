import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CreateEvents() {
  const navigate = useNavigate();
  const { business_id } = useParams();
  const [userData, setUserData] = useState({
    nameOfTheEvent: "",
    location: "",
    coordinates: [0, 0],
    date: "",
    organizer: "",
    user: { business_id },
    price: "",
    isPetFriendly: "",
    isChildFriendly: "",
    isEcoFriendly: "",
    isAccessibilityFriendly: "",
    isVeganFriendly: "",
    contacts: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    console.log(userData);

    axios
      .post("http://localhost:5005/events", userData)
      .then(() => {
        setUserData({
          nameOfTheEvent: "",
          location: "",
          coordinates: [0, 0],
          date: "",
          organizer: "",
          user: { business_id },
          price: "",
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
        <h2> Create a event </h2>
        <label htmlFor="nameOfEvent"> Name of the Event</label>
        <input
          type="text"
          id="nameOfEvent"
          value={userData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <label
        type ="text"
          id="location"
          value={userData.location}
          onChange={handleInputChange}
        >
          <option value="Paris">Paris</option>
          <option value="Burgos">Burgos</option>
        </label>
      </div>
      <div>
        <label htmlFor="coordinates"> Where is it ?</label>
        <select
          type="text"
          id="locationOfEvent"
          value={userData.coordinates}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={userData.date}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="organizer">
          Organizer
          <input
            type="text"
            id="organizer"
            value={userData.organizer}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            value={userData.price}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="isPetFriendly"> Is Pet Friendly
          <select
            id="isPetFriendly"
            value={userData.isPetFriendly}
            onChange={handleInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isChildFriendly"> Is Child Friendly
          <select
            id="isChildFriendly"
            value={userData.isChildFriendly}
            onChange={handleInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isEcoFriendly"> Is Eco Friendly 
          <select
            id="isEcoFriendly"
            value={userData.isEcoFriendly}
            onChange={handleInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isAccessibilityFriendly"> Is Accessibility Friendly 
          <select
            id="isAccessibilityFriendly"
            value={userData.isAccessibilityFriendly}
            onChange={handleInputChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label htmlFor="isVeganFriendly"> Is Vegan Friendly 
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
        <input 
          type="text"
          id="contacts"
          value={userData.contacts}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}

export default CreateEvents;
