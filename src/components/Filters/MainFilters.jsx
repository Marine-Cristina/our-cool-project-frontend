import { Button, Form, Select } from "antd";
import { useEffect, useState } from "react";
import { GetCountries, GetState } from "react-country-state-city";
import CountryFilter from "./CountryFilter";
import StateFilter from "./StateFilter";

const { Option } = Select;

export function MainFilters({ onSearch }) {
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [friendlyType, setFriendlyType] = useState([]);

  const handleFinish = () => {
    const friendlyList = friendlyType;

    onSearch({ country: selectedCountry, state: selectedState, friendlyList });
  };

  return (
    <Form name="mainFilter" layout="inline" onFinish={handleFinish}>
      <Form.Item
        name="countryIdx"
        label="Country"
        rules={[{ required: true, message: "Country is required" }]}
      >
        <CountryFilter
          onChange={(selectedCountry) => {
            setSelectedCountry(selectedCountry);
          }}
          value={selectedCountry ? selectedCountry.iso2 : undefined}
        />
      </Form.Item>

      <Form.Item
        name="state"
        label="City"
        rules={[{ required: true, message: "City is required" }]}
      >
        <StateFilter
          value={selectedState}
          onChange={(value) => {
            setSelectedState(value);
          }}
          countryId={selectedCountry ? selectedCountry.listIdx : undefined}
        />
      </Form.Item>

      <Form.Item name="friendlyType" label="Friendly type">
        <Select
          mode="multiple"
          placeholder="Select friendly type"
          style={{ width: "200px" }}
          onChange={(value) => {
            setFriendlyType(value);
          }}
          allowClear
        >
          <Option key="isPetFriendly" value="isPetFriendly">
            Pet friendly
          </Option>
          <Option key="isChildFriendly" value="isChildFriendly">
            Child friendly
          </Option>
          <Option key="isEcoFriendly" value="isEcoFriendly">
            Eco friendly
          </Option>
          <Option key="isVeganFriendly" value="isVeganFriendly">
            Vegan friendly
          </Option>
          <Option key="isAccessibilityFriendly" value="isAccessibilityFriendly">
            Accessibility friendly
          </Option>
        </Select>
      </Form.Item>

      <Form.Item shouldUpdate>
        {() => (
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        )}
      </Form.Item>
    </Form>
  );
}

export default MainFilters;
