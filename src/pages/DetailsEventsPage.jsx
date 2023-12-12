import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import { API_URL } from "../core/constants";

function DetailsEvent() {
  const [eventDetails, setEventDetails] = useState({});
  const { eventId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/events/${eventId}`)
      .then((response) => {
        setEventDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [eventId]);

  return (
    <div>
      <h1>{eventDetails.name}</h1>
      <h2>{eventDetails.location}</h2>
      {eventDetails.coordinates && (
        <div>
          <h3>Coordinates:</h3>
          <p>Latitude: {eventDetails.coordinates.latitude}</p>
          <p>Longitude: {eventDetails.coordinates.longitude}</p>
        </div>
      )}
      {eventDetails.isPetFriendly && (
        <img
          src={pet}
          alt="Pet Friendly"
          style={{ width: "40px", height: "height" || "auto" }}
        />
      )}
      {eventDetails.isChildFriendly && (
        <img
          src={child}
          alt="Kid Friendly"
          style={{ width: "40px", height: "height" || "auto" }}
        />
      )}
      {eventDetails.isEcoFriendly && (
        <img
          src={eco}
          alt="Eco Friendly"
          style={{ width: "40px", height: "height" || "auto" }}
        />
      )}
      {eventDetails.isAccessibilityFriendly && (
        <img
          src={accessibility}
          alt="Accessibility Friendly"
          style={{ width: "40px", height: "height" || "auto" }}
        />
      )}
      {eventDetails.isVeganFriendly && (
        <img
          src={vegan}
          alt="Vegan Friendly"
          style={{ width: "40px", height: "height" || "auto" }}
        />
      )}
    </div>
  );
}

export default DetailsEvent;
