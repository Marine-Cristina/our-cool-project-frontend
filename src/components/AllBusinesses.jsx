import axios from "axios";
import React, { useState, useEffect } from "react";
import { Avatar, Card, Col, Row } from "antd";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import { Flex } from "antd";
import { API_URL, APP_ROUTES } from "../core/constants";
import Logo from "/logo.png";
import noPicture from "/no-picture.png";
import { InfoCircleOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useStore } from "../context/Store";
import { NavLink, useLocation } from "react-router-dom";
import { getTypeOfBusiness } from "../utils/formatters";
import MainFilters from "./Filters/MainFilters";

function AllBusinesses() {
  const [businesses, setBusinesses] = useState([]);
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

  const getFilteredBusiness = (country, state, friendlyTypes) => {
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
      .get(`${API_URL}/businesses/${queryParamsString}`)
      .then((response) => {
        setBusinesses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getFilteredBusiness(countryQP, stateQP, friendlyTypeQP);
  }, []);

  return (
    <Flex vertical gap="middle">
      <MainFilters
        onSearch={(filters) => {
          const countryCode = filters.country?.iso2;
          const stateCode = filters.state?.state_code;
          const friendlyValue = filters.friendlyList.join(",");

          getFilteredBusiness(countryCode, stateCode, friendlyValue);
        }}
        defaultCountryCode={countryQP}
        defaultStateCode={stateQP}
        defaultFriendlyType={friendlyTypeList}
      />

      <Row className="all">
        {businesses &&
          businesses.map((business, i) => (
            <Col key={i} span={8}>
              <Card
                className="card"
                style={{
                  width: 350,
                  marginBottom: "25px",
                }}
                loading={loading}
                hoverable
                extra={
                  <NavLink to={`${APP_ROUTES.BUSINESSES}/${business._id}`}>
                    <InfoCircleOutlined key="info" /> See details
                  </NavLink>
                }
                cover={
                  <img
                    style={{ height: "300px", objectFit: "cover" }}
                    alt="example"
                    src={business.imageURL || noPicture}
                  />
                }
              >
                <Meta
                  avatar={
                    isAuthenticated === true ? (
                      <Avatar>{business.name.charAt(0).toUpperCase()}</Avatar>
                    ) : (
                      <Avatar src={Logo} />
                    )
                  }
                  title={business.name}
                  description={
                    <div>
                      <p>{getTypeOfBusiness(business.typeOfBusiness)}</p>
                      <span>
                        {`${business.country.name}, ${business.state.name}.`}
                      </span>
                    </div>
                  }
                  style={{ marginBottom: "15px" }}
                />

                <Flex gap={"middle"}>
                  {business.isPetFriendly && (
                    <img
                      src={pet}
                      alt="Kid Friendly"
                      style={{ width: "40px", height: "height" || "auto" }}
                    />
                  )}
                  {business.isChildFriendly && (
                    <img
                      src={child}
                      alt="Kid Friendly"
                      style={{ width: "40px", height: "height" || "auto" }}
                    />
                  )}
                  {business.isEcoFriendly && (
                    <img
                      src={eco}
                      alt="Eco Friendly"
                      style={{ width: "40px", height: "height" || "auto" }}
                    />
                  )}
                  {business.isAccessibilityFriendly && (
                    <img
                      src={accessibility}
                      alt="Accessibility Friendly"
                      style={{ width: "40px", height: "height" || "auto" }}
                    />
                  )}
                  {business.isVeganFriendly && (
                    <img
                      src={vegan}
                      alt="Vegan Friendly"
                      style={{ width: "40px", height: "height" || "auto" }}
                    />
                  )}
                </Flex>
              </Card>
            </Col>
          ))}
      </Row>
    </Flex>
  );
}
export default AllBusinesses;
