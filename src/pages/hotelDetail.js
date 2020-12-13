import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { HotelContext } from "../context/hotelContext";
import axios from "axios";
import HotelDetailsSingle from "../components/HotelDetailsSingle";
import Loader from "../components/Loader";
const HotelDetail = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(HotelContext);
  useEffect(() => {
    axios
      .get(`https://developerfunnel.herokuapp.com/hotelsdetails/${id}`)
      .then((res) => {
        dispatch({ type: "SET_HOTEL_DETAILS", payload: res.data });
      })
      .catch((err) => {
        alert(err);
      });
    return () => {
      dispatch({ type: "SET_HOTEL_DETAILS", payload: null });
    };
  }, [dispatch, id]);
  return (
    <>{state.hotelDetails === null ? <Loader /> : <HotelDetailsSingle />}</>
  );
};

export default HotelDetail;
