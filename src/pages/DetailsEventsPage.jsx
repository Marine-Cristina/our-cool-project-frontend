import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../core/constants";
import EventCard from "../components/EventCard";

function DetailsEventPage() {
  const [eventDetails, setEventDetails] = useState({});
  const { eventId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/events/${eventId}`)
      .then((response) => {
        setEventDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [eventId]);

  return <EventCard eventDetails={eventDetails} loading={loading} />;
}

export default DetailsEventPage;
