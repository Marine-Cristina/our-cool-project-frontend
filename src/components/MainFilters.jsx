import { Button, Form, Select } from "antd";
import { useEffect, useState } from "react";
import { GetCountries, GetState } from "react-country-state-city";

const { Option } = Select;

export function MainFilters({ onSearch }) {
  const [countryIdx, setCountryIdx] = useState(0);
  const [stateIdx, setStateIdx] = useState(0);
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [friendlyType, setFriendlyType] = useState([]);

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);
  useEffect(() => {
    if (!countryIdx) {
      return;
    }

    const countryId = countriesList[countryIdx].id;

    GetState(countryId).then((result) => {
      setStateList(result);
    });
  }, [countryIdx]);

  const handleFinish = () => {
    const country = countriesList[countryIdx];
    const state = stateList[stateIdx];
    const friendlyList = friendlyType;

    onSearch({ country, state, friendlyList });
  };

  const filterOption = (input, option) => {
    const label = option.children || "";
    return label.toLowerCase().includes(input.toLowerCase());
  };

  return (
    <Form name="mainFilter" layout="inline" onFinish={handleFinish}>
      <Form.Item
        name="countryIdx"
        label="Country"
        rules={[{ required: true, message: "Country is required" }]}
      >
        <Select
          showSearch
          placeholder="Select a country"
          onChange={(value) => {
            setCountryIdx(value);
          }}
          filterOption={filterOption}
          allowClear
        >
          {countriesList.map((country, index) => (
            <Option
              key={`country-${index}`}
              value={index}
            >{`${country.emoji} ${country.name}`}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="state"
        label="City"
        rules={[{ required: true, message: "City is required" }]}
      >
        <Select
          showSearch
          placeholder="Select city"
          onChange={(value) => {
            setStateIdx(value);
          }}
          filterOption={filterOption}
          allowClear
        >
          {stateList.map((state, index) => (
            <Option
              key={`country-${index}`}
              value={index}
            >{`${state.name}`}</Option>
          ))}
        </Select>
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
