import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import { API_URL, APP_ROUTES } from "../core/constants";
import { Card, Flex } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import noPicture from "/no-picture.png";
import { getTypeOfBusiness } from "../utils/formatters";
import DeleteBusiness from "../components/Delete/DeleteBusiness";

function DetailsBusiness() {
  const [businessDetails, setBusinessDetails] = useState({});
  const { businessId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/businesses/${businessId}`)
      .then((response) => {
        setBusinessDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [businessId]);

  return (
    <Card
      style={{
        width: 550,
        marginBottom: "25px",
      }}
      loading={loading}
      hoverable
      extra={getTypeOfBusiness(businessDetails.typeOfBusiness)}
      cover={
        <img
          alt="example"
          src={businessDetails.imageURL || noPicture}
        />
      }
      actions={[
        <NavLink to={`${APP_ROUTES.BUSINESSES}/${businessDetails._id}/edit`}>
          <EditOutlined key="edit" />
        </NavLink>,
        <DeleteBusiness businessId={businessDetails._id} />,
      ]}
    >
      <Meta
        title={businessDetails.name}
        description={businessDetails.description}
        style={{ marginBottom: "15px" }}
      />
      <div>{businessDetails.contact}</div>
      <Flex gap={"middle"}>
        {businessDetails.isPetFriendly && (
          <img
            src={pet}
            alt="Kid Friendly"
            style={{ width: "40px", height: "height" || "auto" }}
          />
        )}
        {businessDetails.isChildFriendly && (
          <img
            src={child}
            alt="Kid Friendly"
            style={{ width: "40px", height: "height" || "auto" }}
          />
        )}
        {businessDetails.isEcoFriendly && (
          <img
            src={eco}
            alt="Eco Friendly"
            style={{ width: "40px", height: "height" || "auto" }}
          />
        )}
        {businessDetails.isAccessibilityFriendly && (
          <img
            src={accessibility}
            alt="Accessibility Friendly"
            style={{ width: "40px", height: "height" || "auto" }}
          />
        )}
        {businessDetails.isVeganFriendly && (
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

export default DetailsBusiness;
