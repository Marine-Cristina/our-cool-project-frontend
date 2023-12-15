import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../core/constants";
import { getTypeOfBusiness } from "../utils/formatters";
import DeleteBusiness from "./Delete/DeleteBusiness";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import noPicture from "/no-picture.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import { useStore } from "../context/Store";

function BusinessCard({ businessDetails = {}, loading }) {
  const { user } = useStore();
  debugger;
  const isOwner = user._id === businessDetails.owner;

  return (
    <Card
      className="card-edit-view"
      style={{
        width: 550,
        marginBottom: "25px",
      }}
      loading={loading}
      hoverable
      extra={getTypeOfBusiness(businessDetails.typeOfBusiness)}
      cover={<img alt="example" src={businessDetails.imageURL || noPicture} />}
      actions={
        isOwner && [
          <NavLink to={`${APP_ROUTES.BUSINESSES}/${businessDetails._id}/edit`}>
            <EditOutlined key="edit" />
          </NavLink>,
          <DeleteBusiness businessId={businessDetails._id}>
            <DeleteOutlined key="delete" />
          </DeleteBusiness>,
        ]
      }
    >
      <Meta
        title={businessDetails.name}
        description={businessDetails.location}
        style={{ marginBottom: "15px" }}
      />

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

export default BusinessCard;
