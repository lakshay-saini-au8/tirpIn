import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useUserContext } from "../customHook/useUserContext";
import Loader from "../components/Loader";
import BookListComp from "../components/BookListComp";
import { getAllBooking } from "../utils/api";
const BookingList = () => {
  const { state, dispatch } = useUserContext();
  const { userInfo, allBookings } = state;
  useEffect(() => {
    if (userInfo) {
      getAllBooking(userInfo.user.token).then((data) => {
        dispatch({
          type: "SET_ALLBOOKING_DETAILS",
          payload: data.data.bookings,
        });
      });
    }

    return () => {
      dispatch({ type: "SET_BOOKING_DETAILS", payload: null });
    };
  }, [userInfo, dispatch]);
  return (
    <>
      {!userInfo ? (
        <Redirect to={`/login`} />
      ) : !allBookings ? (
        <Loader />
      ) : (
        <BookListComp />
      )}
    </>
  );
};

export default BookingList;
