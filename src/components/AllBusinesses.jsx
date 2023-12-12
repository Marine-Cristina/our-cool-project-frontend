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
import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useStore } from "../context/Store";
import { NavLink } from "react-router-dom";

function AllBusinesses() {
  const [businesses, setBusinesses] = useState([]);
  const { isAuthenticated } = useStore();
  const [loading, setLoading] = useState(true);

  const getAllBusiness = () => {
    axios
      .get(`${API_URL}/businesses/`)
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
    getAllBusiness();
  }, []);

  return (
    <>
      <Row>
        {businesses &&
          businesses.map((business, i) => (
            <Col key={i} span={8}>
              <Card
                style={{
                  width: 350,
                  marginBottom: "25px",
                }}
                loading={loading}
                hoverable
                extra={business.typeOfBusiness}
                cover={<img alt="example" src={business.photo || noPicture} />}
                actions={[
                  <NavLink to={`${APP_ROUTES.BUSINESS_BY_ID}`}>
                    <InfoCircleOutlined key="info" />
                  </NavLink>,

                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />,
                ]}
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
                  description={business.location}
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
    </>
  );
}
export default AllBusinesses;
