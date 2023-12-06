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
          </div>
        );
      })}
    </div>
  );
}

export default AllEvent;
