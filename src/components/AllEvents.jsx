import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import { Flex } from "antd";
import { API_URL, APP_ROUTES } from "../core/constants";
import { useStore } from "../context/Store";
import noPicture from "/no-picture.png";
import { InfoCircleOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { NavLink } from "react-router-dom";

function AllEvents() {
  const [events, setEvents] = useState([]);
  const { isAuthenticated } = useStore();
  const [loading, setLoading] = useState(true);

  const getAllEvents = () => {
    axios
      .get(`${API_URL}/events/`)
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <Row>
      {events &&
        events.map((event, i) => {
          return (
            <Col key={i} span={8}>
              <Card
                style={{
                  width: 350,
                  marginBottom: "25px",
                }}
                loading={loading}
                hoverable
                extra={
                  <NavLink to={`${APP_ROUTES.EVENTS}/${event._id}`}>
                    <InfoCircleOutlined key="info" />
                  </NavLink>
                }
                cover={<img alt="example" src={event.photo || noPicture} />}
              >
                <Meta
                  title={event.nameOfTheEvent}
                  description={
                    <div>
                      {event.location} &nbsp;|&nbsp;{" "}
                      {event.price ? `${event.price} €` : "Free"}
                    </div>
                  }
                  style={{ marginBottom: "15px" }}
                />

                <Flex gap={"middle"}>
                  {event.isPetFriendly && (
                    <img
                      src={pet}
                      alt="Kid Friendly"
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
              </Card>
            </Col>
          );
        })}
    </Row>
  );
}

export default AllEvents;
