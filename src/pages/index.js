import React, { useContext, useEffect } from "react";
import Main from "../components/Main";
import axios from "axios";
import { HotelContext } from "../context/hotelContext";
import Loader from "../components/Loader";

const Home = () => {
  const { state, dispatch } = useContext(HotelContext);
  const getCity = () =>
    axios.get("https://developerfunnel.herokuapp.com/location");
  const getTripType = () =>
    axios.get("https://developerfunnel.herokuapp.com/booking");
  useEffect(() => {
    axios.all([getCity(), getTripType()]).then(
      axios.spread((...res) => {
        dispatch({ type: "GET_CITY", payload: res[0].data });
        dispatch({ type: "GET_TRIP", payload: res[1].data });
      })
    );
  }, [dispatch]);
  console.log(state);

  return (
    <>
      {state.city === null && state.quickSearch === null ? (
        <Loader />
      ) : (
        <Main />
      )}
    </>
  );
};

export default Home;
