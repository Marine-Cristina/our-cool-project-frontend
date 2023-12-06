import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AllEvent() {
  const [event, setEvent] = useState([]);

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
      {event.map((event) => {
        return (
          <div key={event.id}>
            <Link to={`/events/${event.id}`}> </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllEvent;
