import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountry } from "../../api/index";
const CountryPicker = ({ handleChangeCountry }) => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const country = await fetchCountry();
      setCountry(country);
    };
    fetchApi();
  }, []);

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleChangeCountry(e.target.value)}
      >
        <option value="">Global</option>
        {country.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
