import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useUserContext } from "../customHook/useUserContext";
import Loader from "../components/Loader";
import BookListComp from "../components/BookListComp";
import { getAllBooking, getAllQueryBooking } from "../utils/api";
const BookingList = () => {
  const { state, dispatch } = useUserContext();
  const { userInfo, allBookings } = state;
  const param = useLocation();
  const [bookingState, setBookingState] = useState(false);
  const q = param.search.split("=")[1];
  useEffect(() => {
    if (userInfo) {
      if (q) {
        getAllQueryBooking(q, userInfo.user.token).then((data) => {
          dispatch({
            type: "SET_ALLBOOKING_DETAILS",
            payload: data.data.bookings,
          });
        });
      } else {
        getAllBooking(userInfo.user.token).then((data) => {
          dispatch({
            type: "SET_ALLBOOKING_DETAILS",
            payload: data.data.bookings,
          });
        });
      }
    }

    return () => {
      dispatch({ type: "RESET_ALLBOOKING_DETAILS", payload: null });
    };
  }, [userInfo, dispatch, bookingState, q]);
  return (
    <>
      {!userInfo ? (
        <Redirect to={`/login`} />
      ) : !allBookings ? (
        <Loader />
      ) : (
        <BookListComp
          bookingState={bookingState}
          setBookingState={setBookingState}
        />
      )}
    </>
  );
};

export default BookingList;
