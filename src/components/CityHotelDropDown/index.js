import axios from "axios";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { HotelContext } from "../../context/hotelContext";
import { CHform, CHOption, CHSelect } from "./CHElements";
import { useHistory } from "react-router-dom";
const CityHotelDropDown = () => {
  const { theme } = useContext(ThemeContext);
  const { state, dispatch } = useContext(HotelContext);
  const handleCityChange = (e) => {
    if (e.target.value !== "none") {
      axios
        .get(
          ` https://developerfunnel.herokuapp.com/hotels?city=${e.target.value}`
        )
        .then((res) => dispatch({ type: "GET_CITY_HOTEL", payload: res.data }));
    } else {
      dispatch({ type: "GET_CITY_HOTEL", payload: null });
    }
  };
  const history = useHistory();
  const handleChange = (e) => {
    history.push(`/details/${e.target.value}`);
  };
  return (
    <CHform>
      <CHSelect theme={theme} onChange={handleCityChange}>
        <CHOption value="none">Select Your City</CHOption>
        {state.city &&
          state.city.map((item) => (
            <CHOption key={item._id} value={item.city}>
              {item.city_name}
            </CHOption>
          ))}
      </CHSelect>
      <CHSelect theme={theme} onChange={handleChange}>
        <CHOption> Select Your Hotel</CHOption>
        {state.hotel &&
          state.hotel.map((item) => (
            <CHOption key={item._id} value={item._id}>
              {item.name || "NA"},{item.city_name}
            </CHOption>
          ))}
      </CHSelect>
    </CHform>
  );
};

export default CityHotelDropDown;
