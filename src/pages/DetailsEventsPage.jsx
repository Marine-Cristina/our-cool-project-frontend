import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import { API_URL } from "../core/constants";
import { Card, Flex } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import noPicture from "/no-picture.png";

function DetailsEvent() {
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

  return (
    <Card
      style={{
        width: 550,
        marginBottom: "25px",
      }}
      loading={loading}
      hoverable
      extra={eventDetails.organizer}
      cover={<img alt="example" src={eventDetails.photo || noPicture} />}
      actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
    >
      <Meta
        title={eventDetails.name}
        description={eventDetails.location}
        style={{ marginBottom: "15px" }}
      />

      <Flex gap={"middle"}>
        {eventDetails.isPetFriendly && (
          <img
            src={pet}
            alt="Kid Friendly"
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
      </Flex>
    </Card>
  );
}

export default DetailsEvent;
