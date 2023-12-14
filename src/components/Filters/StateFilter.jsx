import { Select } from "antd";
import { useEffect, useState } from "react";
import { GetState } from "react-country-state-city";

const { Option } = Select;

export function StateFilter({ onChange, value, countryId }) {
  const [stateList, setStateList] = useState([]);
  const stateIdx = stateList.findIndex(
    (state) => state.state_code === value?.state_code
  );

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

  const handleStateChange = (value) => {
    const selectedState = stateList[value];
    onChange({
      state_code: selectedState.state_code,
      name: selectedState.name,
    });
  };

  return (
    <Select
      showSearch
      placeholder="Select city"
      onChange={handleStateChange}
      filterOption={filterOption}
      value={stateIdx === -1 ? undefined : stateIdx}
      allowClear
    >
      {stateList.map((state, index) => (
        <Option
          key={`country-${index}`}
          value={index}
        >{`${state.name}`}</Option>
      ))}
    </Select>
  );
}

export default StateFilter;
