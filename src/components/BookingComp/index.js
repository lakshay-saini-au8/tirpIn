import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../customHook/useUserContext";
import { createBooking } from "../../utils/api";
import {
  BCContainer,
  BCWrapper,
  Input,
  InputGroup,
  FormContainer,
} from "./BCElements";

const BookingComp = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [error, setError] = useState(null);
  const { state, dispatch } = useUserContext();
  const { bookingHotelDetails, userInfo } = state;
  const { name, city_name, cost, city } = bookingHotelDetails[0];
  var d = new Date();
  var n = d.toISOString().split("T")[0];
  const [userInput, setUserInput] = useState({
    hotelName: name,
    cityName: city_name,
    price: cost,
    bookingDate: n,
  });
  const inputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const submitChange = async (e) => {
    e.preventDefault();
    setLoading(false);
    const { data } = await createBooking(
      { ...userInput, cityId: city },
      userInfo.user.token
    );
    const { booking, message } = data;
    if (booking) {
      history.push(`/allBooking`);
    }
    if (message) {
      setError(message);
    }
    setLoading(false);
  };
  return (
    <BCContainer>
      <BCWrapper>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <FormContainer onSubmit={submitChange}>
          <InputGroup>
            <Input
              type="hotelName"
              name="hotelName"
              value={userInput.hotelName}
              onChange={inputChange}
              required
              autoComplete="off"
            />
            <span>Hotel Name</span>
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              name="cityName"
              value={userInput.cityName}
              onChange={inputChange}
              required
              autoComplete="off"
            />
            <span>City Name</span>
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              name="price"
              value={userInput.price}
              onChange={inputChange}
              required
              autoComplete="off"
            />
            <span>Price</span>
          </InputGroup>
          <span
            style={{
              paddingTop: "20px",
              color: "#2756b3",
              fontSize: "0.85rem",
            }}
          >
            Booking Date
          </span>
          <InputGroup style={{ paddingTop: 0 }}>
            <Input
              type="date"
              name="bookingDate"
              value={userInput.bookingDate}
              onChange={inputChange}
              required
              min={n}
              autoComplete="off"
            />
          </InputGroup>
          <Input
            type="submit"
            value={loading ? "Wait for a sec" : "Book"}
            style={{
              marginTop: "20px",
              background: "#2756b3",
              color: "#fff",
              fontWeight: "bold",
            }}
          />
        </FormContainer>
      </BCWrapper>
    </BCContainer>
  );
};

export default BookingComp;
