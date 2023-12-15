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
import { NavLink, useLocation } from "react-router-dom";
import MainFilters from "./Filters/MainFilters";

function AllEvents() {
  const [events, setEvents] = useState([]);
  const { isAuthenticated } = useStore();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const countryQP = queryParams.get("country");
  const stateQP = queryParams.get("state");
  const friendlyTypeQP = queryParams.get("friendlyType");
  const friendlyTypeList = friendlyTypeQP
    ? friendlyTypeQP.split(",")
    : undefined;

  const getFilteredEvent = (country, state, friendlyTypes) => {
    let queryParamsString = "";

    if (country) {
      queryParamsString = `country=${country}`;
    }

    if (state) {
      queryParamsString = `${
        queryParamsString ? `${queryParamsString}&` : ""
      }state=${state}`;
    }

    if (friendlyTypes) {
      queryParamsString = `${
        queryParamsString !== "" ? `&${queryParamsString}&` : ""
      }friendlyType=${friendlyTypes}`;
    }

    queryParamsString = queryParamsString && `?${queryParamsString}`;

    axios
      .get(`${API_URL}/events/${queryParamsString}`)
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
    getFilteredEvent(countryQP, stateQP, friendlyTypeQP);
  }, []);

  return (
    <Flex vertical gap="middle">
      <MainFilters
        onSearch={(filters) => {
          const countryCode = filters.country?.iso2;
          const stateCode = filters.state?.state_code;
          const friendlyValue = filters.friendlyList.join(",");

          getFilteredEvent(countryCode, stateCode, friendlyValue);
        }}
        defaultCountryCode={countryQP}
        defaultStateCode={stateQP}
        defaultFriendlyType={friendlyTypeList}
      />

      <Row className="all">
        {events &&
          events.map((event, i) => {
            return (
              <Col key={i} span={8}>
                <Card
                  style={{
                    width: 350,
                    marginBottom: "25px",
                    heigth: "100%",
                  }}
                  loading={loading}
                  hoverable
                  extra={
                    <NavLink to={`${APP_ROUTES.EVENTS}/${event._id}`}>
                      <InfoCircleOutlined key="info" /> See details
                    </NavLink>
                  }
                  cover={
                    <img
                      style={{ height: "300px", objectFit: "cover" }}
                      alt="example"
                      src={event.imageURL || noPicture}
                    />
                  }
                >
                  <Meta
                    title={event.nameOfTheEvent}
                    description={
                      <div>
                        <p>{event.price ? `${event.price} €` : "Free"}</p>
                        <span>
                          {`${event.country.name}, ${event.state.name}.`}
                        </span>
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
    </Flex>
  );
}

export default AllEvents;
