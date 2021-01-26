import React, { useReducer, createContext } from "react";
const initialState = {
  userInfo: localStorage.getItem("userLogin")
    ? JSON.parse(localStorage.getItem("userLogin"))
    : null,
  bookingHotelDetails: null,
  allBookings: null,
  allHotels: null,
};
const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state, userInfo: payload };
    case "SET_BOOKING_DETAILS":
      return { ...state, bookingHotelDetails: payload };
    case "SET_ALLBOOKING_DETAILS":
      return { ...state, allBookings: payload };
    case "GET_ALL_HOTEL":
      return { ...state, allHotels: payload };
    case "RESET_BOOKING_DETAILS":
      return { ...state, bookingHotelDetails: null };
    case "RESET_ALLBOOKING_DETAILS":
      return { ...state, allBookings: null };
    case "RESET_USER":
      return { userInfo: null, bookingHotelDetails: null, allBookings: null };

    default:
      return { ...state };
  }
};

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
