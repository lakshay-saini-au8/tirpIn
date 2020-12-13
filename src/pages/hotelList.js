import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HotelContext } from "../context/hotelContext";
import axios from "axios";
import HotelListFinal from "../components/HotelListFinal";
import Loader from "../components/Loader";

const HotelList = () => {
  const { id } = useParams();
  const randomNo = Math.floor(Math.random() * 5) + 1;
  const { state, dispatch } = useContext(HotelContext);
  const getSuggestion = () =>
    axios.get(`https://developerfunnel.herokuapp.com/hotels?city=${randomNo}`);
  const gethotlelist = () =>
    axios.get(`https://developerfunnel.herokuapp.com/hotellist/${id}`);
  useEffect(() => {
    axios.all([getSuggestion(), gethotlelist()]).then(
      axios.spread((...res) => {
        dispatch({ type: "SET_SUGESSTION", payload: res[0].data });
        dispatch({ type: "SET_HOTEL_LIST", payload: res[1].data });
      })
    );
    return () => {
      dispatch({ type: "SET_SUGESSTION", payload: null });
      dispatch({ type: "SET_HOTEL_LIST", payload: null });
    };
  }, [id, dispatch]);
  return (
    <>
      {state.suggestion === null && state.hotelList === null ? (
        <Loader />
      ) : (
        <HotelListFinal />
      )}
    </>
  );
};

export default HotelList;
