import { Select } from "antd";
import { useEffect, useState } from "react";
import { GetCountries } from "react-country-state-city";

// value is country code
export function CountryFilter({ value, onChange, onClear }) {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

  const filterOption = (input, option) => {
    const label = option.children || "";
    return label.toLowerCase().includes(input.toLowerCase());
  };

  return (
    <Select
      showSearch
      placeholder="Select a country"
      onChange={onChange}
      onClear={onClear}
      filterOption={filterOption}
      allowClear
      value={value}
      options={countriesList.map((country) => ({
        label: `${country.emoji} ${country.name}`,
        value: country.iso2,
        raw: country,
      }))}
    ></Select>
  );
}

export default CountryFilter;
