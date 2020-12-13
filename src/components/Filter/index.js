import React, { useContext, useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { FilterForm, FilterWrapper, FilterSide } from "./FilterElements";
import axios from "axios";
import { useParams } from "react-router-dom";
import { HotelContext } from "../../context/hotelContext";
const Filter = () => {
  const { theme } = useTheme();
  const { state, dispatch } = useContext(HotelContext);
  const [change, setChange] = useState(true);
  useEffect(() => {}, [change]);
  const { id } = useParams();
  const handelChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "0") {
      axios
        .get(`https://developerfunnel.herokuapp.com/hotellist/${id}`)
        .then((res) => {
          dispatch({ type: "SET_HOTEL_LIST", payload: res.data });
        })
        .catch((err) => {
          alert(err);
        });
      setChange(!change);
    } else if (inputValue.length === 1) {
      axios
        .get(
          `https://developerfunnel.herokuapp.com/hotellist/${id}?roomtype=${inputValue}`
        )
        .then((res) => {
          dispatch({ type: "SET_HOTEL_LIST", payload: res.data });
        })
        .catch((err) => {
          alert(err);
        });
      setChange(!change);
    } else {
      const [low, high] = inputValue.split(",");

      axios
        .get(
          `https://developerfunnel.herokuapp.com/hotellist/${id}?hcost=${high}&lcost=${low}`
        )
        .then((res) => {
          dispatch({ type: "SET_HOTEL_LIST", payload: res.data });
        })
        .catch((err) => {
          alert(err);
        });
      setChange(!change);
    }
  };
  console.log(state);
  return (
    <FilterWrapper>
      <FilterForm onChange={handelChange}>
        <FilterSide theme={theme}>
          <p>Room Type</p>

          <label htmlFor="all">
            <input type="radio" id="all" name="filter" value="0" />
            All
          </label>
          <label htmlFor="deluxe">
            <input type="radio" id="deluxe" name="filter" value="1" />
            Deluxe Room
          </label>

          <label htmlFor="premiere">
            <input type="radio" id="premiere" name="filter" value="2" />
            Premiere Rooms
          </label>

          <label htmlFor="travel">
            <input type="radio" id="travel" name="filter" value="3" />
            Travel
          </label>

          <label htmlFor="sdeluxeroom">
            <input type="radio" id="sdeluxeroom" name="filter" value="4" />
            Semi Deluxe Room
          </label>
        </FilterSide>
        <FilterSide theme={theme}>
          <p>Cost Filter</p>
          <label htmlFor="allcost">
            <input type="radio" id="allcost" name="filter" value="0" />
            All
          </label>
          <label htmlFor="1000-3000">
            <input
              type="radio"
              id="1000-3000"
              name="filter"
              value="1000,3000"
            />
            Rs 1000 - 3000
          </label>

          <label htmlFor="3001-6000">
            <input
              type="radio"
              id="3001-6000"
              name="filter"
              value="3001,6000"
            />
            Rs 3001 - 6000
          </label>
          <label htmlFor="6001-12000">
            <input
              type="radio"
              id="6001-12000"
              name="filter"
              value="6001,12000"
            />
            Rs 6001 - 12000
          </label>
          <label htmlFor="12001-18000">
            <input
              type="radio"
              id="12001-18000"
              name="filter"
              value="12001,18000"
            />
            Rs 12001 - 18000
          </label>
        </FilterSide>
      </FilterForm>
    </FilterWrapper>
  );
};

export default Filter;
