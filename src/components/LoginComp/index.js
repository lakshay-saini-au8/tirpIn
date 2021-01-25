import React, { useState } from "react";
import {
  LCContainer,
  LCWrapper,
  Column1,
  Column2,
  Img,
  Input,
  InputGroup,
  FormContainer,
} from "./LCElements";
import loginImg from "../../Images/login.svg";
import { Link, useHistory } from "react-router-dom";
import { userLogin } from "../../utils/api";
const LoginComp = ({ dispatch, bookingId }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const inputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const submitChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await userLogin(userInput.email, userInput.password);
    const { user, message } = data;
    if (user) {
      dispatch({ type: "SET_USER", payload: { user } });
      if (bookingId) {
        history.push(`/booking/${bookingId}`);
      }
    }
    if (message) {
      setError(message);
    }
    setLoading(false);
  };

  return (
    <LCContainer>
      <LCWrapper>
        <Column1>
          <Img src={loginImg} />
        </Column1>
        <Column2>
          <h2>Login</h2>
          {error && <p>{error}</p>}
          <FormContainer onSubmit={submitChange}>
            <InputGroup>
              <Input
                type="email"
                name="email"
                value={userInput.email}
                onChange={inputChange}
                required
                autoComplete="off"
              />
              <span>Email</span>
            </InputGroup>
            <InputGroup>
              <Input
                type="password"
                name="password"
                value={userInput.password}
                onChange={inputChange}
                required
                autoComplete="off"
              />
              <span>Password</span>
            </InputGroup>
            <Input
              type="submit"
              value={loading ? "Wait for a sec" : "Login"}
              style={{
                marginTop: "20px",
                background: "#2756b3",
                color: "#fff",
                fontWeight: "bold",
              }}
            />
          </FormContainer>
          <Link
            to="/register"
            style={{
              marginTop: "20px",
              color: "#2756b3",
              fontWeight: "bold",
              alignSelf: "flex-start",
            }}
          >
            New User?
          </Link>
        </Column2>
      </LCWrapper>
    </LCContainer>
  );
};

export default LoginComp;
