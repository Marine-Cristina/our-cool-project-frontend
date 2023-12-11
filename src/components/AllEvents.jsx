import axios from "axios";
import React, { useState, useEffect } from "react";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import { Flex } from "antd";
import { API_URL } from "../core/constants";

const EVENTS_URL = `${API_URL}/events/`;

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
      {events &&
        events.map((event, i) => {
          return (
            <div key={i}>
              <h2>{event.nameOfTheEvent}</h2>
              <h2>{event.location}</h2>
              <h2>{event.date}</h2>
              <h2>{event.organizer}</h2>
              <h2>{event.price}</h2>
              <Flex>
                {event.isPetFriendly && (
                  <img
                    src={pet}
                    alt="Pet Friendly"
                    style={{ width: "40px", height: "height" || "auto" }}
                  />
                )}

                {event.isChildFriendly && (
                  <img
                    src={child}
                    alt="Kid Friendly"
                    style={{ width: "40px", height: "height" || "auto" }}
                  />
                )}

                {event.isEcoFriendly && (
                  <img
                    src={eco}
                    alt="Eco Friendly"
                    style={{ width: "40px", height: "height" || "auto" }}
                  />
                )}

                {event.isAccessibilityFriendly && (
                  <img
                    src={accessibility}
                    alt="Accessibility Friendly"
                    style={{ width: "40px", height: "height" || "auto" }}
                  />
                )}

                {event.isVeganFriendly && (
                  <img
                    src={vegan}
                    alt="Vegan Friendly"
                    style={{ width: "40px", height: "height" || "auto" }}
                  />
                )}
              </Flex>
            </div>
          );
        })}
    </div>
  );
}

export default AllEvents;
