import { Select } from "antd";
import { useEffect, useState } from "react";
import { GetCountries } from "react-country-state-city";

const { Option } = Select;

// value is country code
export function CountryFilter({ value, onChange }) {
  const [countriesList, setCountriesList] = useState([]);
  const countryIdx = countriesList.findIndex(
    (country) => country.iso2 === value?.iso2
  );

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

  const filterOption = (input, option) => {
    const label = option.children || "";
    return label.toLowerCase().includes(input.toLowerCase());
  };

  const handleCountryChange = (value) => {
    const selectedCountry = countriesList[value];
    onChange({
      listIdx: selectedCountry.id,
      name: selectedCountry.name,
      iso2: selectedCountry.iso2,
    });
  };

  return (
    <Select
      showSearch
      placeholder="Select a country"
      onChange={handleCountryChange}
      filterOption={filterOption}
      allowClear
      value={countryIdx !== -1 ? countryIdx : undefined}
    >
      {countriesList.map((country, index) => (
        <Option
          key={`country-${index}`}
          value={index}
        >{`${country.emoji} ${country.name}`}</Option>
      ))}
    </Select>
  );
}

export default CountryFilter;
