import { Select } from "antd";
import { useEffect, useState } from "react";
import { GetState } from "react-country-state-city";

export function StateFilter({ onChange, value, onClear, countryId }) {
  const [stateList, setStateList] = useState([]);

  console.log({ countryId });

  useEffect(() => {
    if (!countryId) {
      setStateList([]);
      return;
    }

    GetState(countryId).then((result) => {
      setStateList(result);
    });
  }, [countryId]);

  const filterOption = (input, option) => {
    const label = option.children || "";
    return label.toLowerCase().includes(input.toLowerCase());
  };

  return (
    <Select
      showSearch
      placeholder="Select city"
      onChange={onChange}
      onClear={onClear}
      filterOption={filterOption}
      value={value}
      allowClear
      options={stateList.map((state) => ({
        label: state.name,
        value: state.state_code,
        raw: state,
      }))}
    />
  );
}

export default StateFilter;
