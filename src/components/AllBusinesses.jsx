import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import { Flex } from "antd";
import { API_URL } from "../core/constants";

const BUSINESSES_URL = `${API_URL}/businesses/`;

function AllBusinesses() {
  const [businesses, setBusinesses] = useState([]);

  const getAllBusiness = () => {
    axios
      .get(BUSINESSES_URL)
      .then((response) => setBusinesses(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllBusiness();
  }, []);

  return (
    <Row gutter={16}>
      {businesses &&
        businesses.map((business, i) => (
          <Col key={i} span={8}>
            <Card title={business.name} bordered={false}>
              <h2>{business.location}</h2>
              <h2>{business.typeOfBusiness}</h2>
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
  );
}

export default AllBusinesses;
