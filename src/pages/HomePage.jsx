import React from "react";
import { Flex, Select } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "/headerimage.png";

const { Option } = Select;

function HomePage() {
  const navigate = useNavigate();

  function handleChange(value) {
    console.log(`selected ${value}`);
    if (value === "Paris") {
      navigate("/businesses/paris");
    }
  }

  function handleBlur() {
    console.log("blur");
  }

  function handleFocus() {
    console.log("focus");
  }

  return (
    <>
      <Flex
        gap={90}
        justify="center"
        align="center"
        style={{ width: "100%", margin: "10px" }}
      >
        <Flex vertical="true" align="center" gap={1}>
          <h1>Connecting Compassionate Spaces.</h1>
          <h3 className="slogan">
            Your Guide to Pet-Friendly, Child-Friendly, Eco-Friendly,
            Vegan-Friendly, and Accessible Businesses & Events.
          </h3>
        </Flex>
        <img src={Header} alt="Spherendly header image" />
      </Flex>

      <Flex
        vertical="true"
        justify="center"
        align="center"
        style={{
          backgroundColor: "#9bccd082",
          marginTop: "6%",
          color: "white",
          height: "20%",
        }}
      >
        <h2>Where do you want to explore?</h2>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="Burgos">Burgos, Spain</Option>
          <Option value="Paris">Paris, France</Option>
        </Select>
      </Flex>
    </>
  );
}

export default HomePage;
