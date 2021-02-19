import axios from "axios";
import { useEffect, useState } from "react";
import { useTheme } from "../../customHook/useTheme";
import { useUserContext } from "../../customHook/useUserContext";
import { hotelDateFilter, updateStatus } from "../../utils/api";
import {
  BLCContainer,
  BLCWrapper,
  Btn,
  BtnStatus,
  CHOption,
  CHSelect,
  Input,
} from "./BLCElements";

const BookListComp = ({ bookingState, setBookingState, q }) => {
  const { state, dispatch } = useUserContext();
  const { theme } = useTheme();
  const { allBookings, userInfo, allHotels } = state;
  const [userInput, setUserInput] = useState({
    name: "none",
    date: null,
  });
  const handleCityChange = async (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    if (e.target.value !== "none") {
      const { data } = await hotelDateFilter(
        userInfo.user.token,
        e.target.value
      );
      const { bookings } = data;
      if (bookings) {
        dispatch({ type: "SET_ALLBOOKING_DETAILS", payload: bookings });
      }
    } else {
      dispatch({ type: "RESET_ALLBOOKING_DETAILS", payload: null });
      setBookingState(!bookingState);
    }
  };
  const inputChange = async (e) => {
    const { data } = await hotelDateFilter(
      userInfo.user.token,
      null,
      e.target.value
    );
    const { bookings } = data;
    if (bookings) {
      dispatch({ type: "SET_ALLBOOKING_DETAILS", payload: bookings });
    }
  };
  useEffect(() => {
    if (!allHotels) {
      axios
        .get(` https://developerfunnel.herokuapp.com/hotels`)
        .then((res) => dispatch({ type: "GET_ALL_HOTEL", payload: res.data }));
    }
  });
  const handleAction = async (e) => {
    const { data } = await updateStatus(
      e.target.dataset.id,
      e.target.dataset.status,
      userInfo.user.token
    );
    const { booking } = data;
    if (booking) {
      dispatch({ type: "RESET_ALLBOOKING_DETAILS", payload: null });
      setBookingState(!bookingState);
    }
  };
  const handleAll = () => {
    dispatch({ type: "RESET_ALLBOOKING_DETAILS", payload: null });
    setBookingState(!bookingState);
  };
  return (
    <BLCContainer>
      <BLCWrapper>
        {userInfo.user.role === "admin" ? (
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginBottom: "20px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Btn to="/allBooking" theme={theme} onClick={handleAll}>
                All
              </Btn>
              <Btn to="/allBooking?q=active" theme={theme}>
                Active
              </Btn>
              <Btn to="/allBooking?q=completed" theme={theme}>
                Completed
              </Btn>
            </div>
            <form
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <CHSelect theme={theme} name="name" onChange={handleCityChange}>
                <CHOption value="none">Select Your Hotel</CHOption>
                {allHotels &&
                  allHotels.map((item) => (
                    <CHOption key={item._id} value={item.name}>
                      {item.name}
                    </CHOption>
                  ))}
              </CHSelect>
              <Input
                type="date"
                name="bookingDate"
                value={userInput.bookingDate}
                onChange={inputChange}
                required
                autoComplete="off"
              />
            </form>
          </div>
        ) : null}
        {allBookings.length === 0 ? (
          "No Booking Till Now"
        ) : (
          <div
            style={{
              overflowX: "scroll",
              width: "100%",
            }}
          >
            <table
              border="1"
              style={{
                background: "#fff",
                width: "100%",
                textAlign: "center",
              }}
            >
              <thead>
                <tr>
                  <th>Hotel Name</th>
                  <th>City Name</th>
                  <th>Price</th>
                  <th>Booking Date</th>
                  {userInfo.user.role === "admin" ? (
                    <>
                      <td>Customer Name</td> <td>Booking Status</td>
                      {q === "completed" ? null : <td>Action</td>}
                    </>
                  ) : (
                    <th>Status</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {allBookings.map((item) => (
                  <tr key={item._id}>
                    <td>{item.hotelName}</td>
                    <td>{item.cityName}</td>
                    <td>{item.price}</td>
                    <td>{item.bookingDate.split("T")[0]}</td>
                    {userInfo.user.role === "admin" ? (
                      <>
                        <td>{item.userId.name}</td>

                        <td>{item.isAccepted ? "Confirm" : "Not Confirmed"}</td>
                        {q === "completed" ? null : (
                          <td>
                            <BtnStatus
                              onClick={handleAction}
                              data-id={item._id}
                              data-status={
                                !item.isAccepted ? "accept" : "rejected"
                              }
                              theme={theme}
                              style={{
                                background: `${
                                  !item.isAccepted ? "green" : "red"
                                }`,
                              }}
                            >
                              {item.isAccepted ? "Reject" : "Accept"}
                            </BtnStatus>
                          </td>
                        )}
                      </>
                    ) : (
                      <td
                        style={{
                          color: `${!item.isAccepted ? "red" : "green"}`,
                          fontWeight: "bold",
                        }}
                      >
                        {item.isAccepted ? "Confirm" : "Not Confirmed"}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </BLCWrapper>
    </BLCContainer>
  );
};

export default BookListComp;
