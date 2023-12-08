import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function FilterEvent() {
  const [event, setEvent] = useState([]);
  console.log('hello event')

  const getAllEvent = () => {
    axios
      .get(`${API_URL}/events`)
      .then((response) => setEvent(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllEvent();
  }, []);

  return (
    <div>
      {event && event.map((event, i) => {
        if (event.location === "Paris") {
            return (
                <div key={i}>
                  <Link to={`/events/${event._id}`}>
                 </Link>
                 <h2>{event.name}</h2>
                  <h2>{event.location.Paris}</h2> 
                  <h2>{event.typeOfEvent}</h2>
                  <h2>{event.isPetFriendly && <img src="pet_app.avif" alt="Pet Friendly" />}</h2>
                  <h2>{event.isChildFriendly && <img src="baby_app.png" alt = "Kid Friendly"/>}</h2>
                  <h2>{event.isEcoFriendly && <img src = "ecofriendly_app" alt="Eco Friendly"/>}</h2>
                  <h2>{event.isAccessibilityFriendly && <img src="handicap_app" alt="Accessibility Friendly"/>}</h2>
                  <h2>{event.isVeganFriendly && <img src="vegan_app" alt="Vegan Friendly"/>}</h2>
                </div>
        );

        } else if (event.location === "Burgos") {
                return (
                    <div key={i}>
                      <Link to={`/events/${event._id}`}>
                     </Link>
                     <h2>{event.name}</h2>
                      <h2>{event.location.Burgos}</h2> 
                      <h2>{event.typeOfEvent}</h2>
                      <h2>{event.isPetFriendly && <img src="pet_app.avif" alt="Pet Friendly" />}</h2>
                      <h2>{event.isChildFriendly && <img src="baby_app.png" alt = "Kid Friendly"/>}</h2>
                      <h2>{event.isEcoFriendly && <img src = "ecofriendly_app" alt="Eco Friendly"/>}</h2>
                      <h2>{event.isAccessibilityFriendly && <img src="handicap_app" alt="Accessibility Friendly"/>}</h2>
                      <h2>{event.isVeganFriendly && <img src="vegan_app" alt="Vegan Friendly"/>}</h2>
                    </div>
                  );
            } else {
                return null; 
            }
        })}
    </div>
  );
}

export default FilterEvent;
