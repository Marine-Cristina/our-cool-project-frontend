import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AllEvent() {
  const [event, setEvent] = useState([]);
  console.log('hello events')

  const getAllEvents = () => {
    axios
      .get(`${API_URL}/events`)
      .then((response) => setEvent(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div>
      {event && event.map((event, i) => {
        return (
          <div key={i}>
            <Link to={`/events/${event._id}`}> {event._id}</Link>
            <h2>{event.nameOfTheEvent}</h2>
            <h2>{event.location}</h2>
            <h2>{event.date}</h2>
            <h2>{event.organizer}</h2>
            <h2>{event.price}</h2>
            <h2>{event.isPetFriendly && <img src="pet_app.avif" alt="Pet Friendly" />}</h2>
            <h2>{event.isChildFriendly && <img src="baby_app.png" alt = "Kid Friendly"/>}</h2>
            <h2>{event.isEcoFriendly && <img src = "ecofriendly_app" alt="Eco Friendly"/>}</h2>
            <h2>{event.isAccessibilityFriendly && <img src="handicap_app" alt="Accessibility Friendly"/>}</h2>
            <h2>{event.isVeganFriendly && <img src="vegan_app" alt="Vegan Friendly"/>}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default AllEvent;
