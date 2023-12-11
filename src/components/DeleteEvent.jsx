import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../core/constants";

function DeleteEvent({ ownerId }) {
  const [deleteEvent, setDeleteEvent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (deleteEvent) {
      axios
        .delete(`${API_URL}/events/${ownerId}`)
        .then(() => {
          console.log("event delete successfully");
          navigate(`/`);
        })
        .catch((error) => {
          console.log("error deleting event");
        });
    }
    [deleteEvent, ownerId, navigate];
  });

  return <button onClick={() => setDeleteEvent(true)} delete></button>;
}

export default DeleteEvent;
