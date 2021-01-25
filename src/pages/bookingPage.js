import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";

import { useUserContext } from "../customHook/useUserContext";
import BookingComp from "../components/BookingComp";
import Loader from "../components/Loader";
const BookingPage = () => {
  const { id } = useParams();
  const { state, dispatch } = useUserContext();
  const { userInfo, bookingHotelDetails } = state;
  useEffect(() => {
    if (userInfo) {
      axios
        .get(`https://developerfunnel.herokuapp.com/hotelsdetails/${id}`)
        .then((res) => {
          dispatch({ type: "SET_BOOKING_DETAILS", payload: res.data });
        })
        .catch((err) => {
          alert(err);
        });
    }

    return () => {
      dispatch({ type: "SET_BOOKING_DETAILS", payload: null });
    };
  }, [dispatch, id, userInfo]);
  return (
    <>
      {!userInfo ? (
        <Redirect to={`/login?id=${id}`} />
      ) : !bookingHotelDetails ? (
        <Loader />
      ) : (
        <BookingComp />
      )}
    </>
  );
};

export default BookingPage;
