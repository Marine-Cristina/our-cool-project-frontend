import { EditOutlined } from "@ant-design/icons";
import { Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DeleteEvent from "./Delete/DeleteEvent";
import { APP_ROUTES } from "../core/constants";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import noPicture from "/no-picture.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import { Image } from "cloudinary-react";

let cloudName = import.meta.env.CLOUD_NAME;
let cloudKey = import.meta.env.CLOUD_API_KEY;
let cloudApiSecret = import.meta.env.CLOUD_API_SECRET;

function EventCard({ eventDetails, loading }) {
  const [image, setImage] = useState(eventDetails.photo || "");
  
  return (
    <Card
      style={{
        width: 550,
        marginBottom: "25px",
      }}
      loading={loading}
      hoverable
      extra={eventDetails.organizer}
      //cover={<img alt="example" src={eventDetails.photo || noPicture} />}
      actions={[
        <NavLink to={`${APP_ROUTES.EVENTS}/${eventDetails._id}/edit`}>
          <EditOutlined key="edit" />
        </NavLink>,
        <DeleteEvent eventId={eventDetails._id} />,
      ]}
    >
      <Meta
        title={eventDetails.name}
        description={eventDetails.location}
        style={{ marginBottom: "15px" }}
      />

      <input type="file" onChange={(e) => setImgUpload(e.target.files[0])}/>
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

export default EventCard;
