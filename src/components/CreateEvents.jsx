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
        navigate("/eventscreate"); // what's happening when the user create a events after --> redirecting on this page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handelSubmit}>
      <div>
        <h2> Create a event </h2>
        <label htmlFor="nameOfEvent"> Name of the Event</label>
        <select
          type="text"
          id="nameOfEvent"
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
          id="locationOfEvent"
          value={userData.coordinates}
          onChange={handelInputChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <select
          type="date"
          id="date"
          value={userData.date}
          onChange={handelInputChange}
        ></select>
      </div>
      <div>
        <label htmlFor="organizer">
          {" "}
          Organizer
          <select
            type="text"
            id="organizeer"
            value={userData.organizer}
            onChange={handelInputChange}
          ></select>
        </label>
      </div>
      <div>
        <label htmlFor="price">
          Price
          <select
            type="number"
            id="price"
            value={userData.price}
            onChange={handelInputChange}
          ></select>
        </label>
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

export default CreateEvents;
