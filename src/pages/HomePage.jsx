import React from "react";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

import Header from "/header.png";

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
      <img src={Header} alt="Colorful sphere" style={{ width: "100%" }} />

      <div>
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
      </div>
    </>
  );
}

export default HomePage;
