import axios from "axios";
import React, { useState, useEffect } from "react";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.avif";
import vegan from "/vegan.png";

const API_URL = "http://localhost:5005/";
const EVENTS_URL = `${API_URL}events/`;

function AllEvents() {
  const [events, setEvents] = useState([]);

  const getAllEvents = () => {
    axios
      .get(EVENTS_URL)
      .then((response) => setEvents(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div>
      {events && events.map((event, i) => {
        return (
          <div key={i}>
            <h2>{event.nameOfTheEvent}</h2>
            <h2>{event.location}</h2>
            <h2>{event.date}</h2>
            <h2>{event.organizer}</h2>
            <h2>{event.price}</h2>
            <h2>{event.isPetFriendly && <img src={pet} alt="Pet Friendly" />}</h2>
            <h2>{event.isChildFriendly && <img src={child} alt = "Kid Friendly"/>}</h2>
            <h2>{event.isEcoFriendly && <img src={eco} alt="Eco Friendly"/>}</h2>
            <h2>{event.isAccessibilityFriendly && <img src={accessibility} alt="Accessibility Friendly"/>}</h2>
            <h2>{event.isVeganFriendly && <img src={vegan} alt="Vegan Friendly"/>}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default AllEvents;
