import { Button, Form, Select } from "antd";
import { useEffect, useState } from "react";
import { GetCountries, GetState } from "react-country-state-city";
import CountryFilter from "./CountryFilter";
import StateFilter from "./StateFilter";

const { Option } = Select;

export function MainFilters({
  onSearch,
  defaultCountryCode,
  defaultStateCode,
  defaultFriendlyType,
}) {
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [friendlyType, setFriendlyType] = useState(defaultFriendlyType || []);
  const [form] = Form.useForm();

  const handleFinish = () => {
    onSearch({
      country: selectedCountry,
      state: selectedState,
      friendlyList: friendlyType,
    });
  };

  useEffect(() => {
    if (defaultCountryCode) {
      GetCountries()
        .then((countries) => {
          const selected = countries.find(
            (country) => country.iso2 === defaultCountryCode
          );

          setSelectedCountry({
            listIdx: selected.id,
            name: selected.name,
            iso2: selected.iso2,
          });

          if (defaultStateCode && selected) {
            return GetState(selected.id);
          }
        })
        .then((states) => {
          const selected = states.find(
            (state) => state.state_code === defaultStateCode
          );
          setSelectedState({
            name: selected.name,
            state_code: selected.state_code,
          });
        });
    }
  }, [defaultCountryCode, defaultStateCode]);

  return (
    <Form
      form={form}
      name="mainFilter"
      layout="inline"
      onFinish={handleFinish}
      initialValues={{
        countryCode: defaultCountryCode,
        state: defaultStateCode,
        friendlyType: friendlyType,
      }}
    >
      <Form.Item name="countryCode" label="Country">
        <CountryFilter
          onChange={(value, option) => {
            const country = option?.raw;

            if (country) {
              setSelectedCountry({
                listIdx: country.id,
                name: country.name,
                iso2: country.iso2,
              });
            } else {
              setSelectedCountry();
            }
          }}
          onClear={() => {
            setSelectedCountry();
          }}
        />
      </Form.Item>

      <Form.Item name="state" label="City">
        <StateFilter
          onChange={(value, option) => {
            const state = option?.raw;

            if (state) {
              setSelectedState({
                name: state.name,
                state_code: state.state_code,
              });
            } else {
              setSelectedState();
            }
          }}
          onClear={() => {
            setSelectedState();
          }}
          countryId={selectedCountry?.listIdx}
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
          value={friendlyType}
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
