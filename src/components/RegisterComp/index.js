import { useState } from "react";
import {
  RCContainer,
  RCWrapper,
  Column1,
  Column2,
  Img,
  Input,
  InputGroup,
  FormContainer,
} from "./RCElements";
import registerImg from "../../Images/register.svg";
import { Link } from "react-router-dom";
import { userLogin, userRegister } from "../../utils/api";
const RegisterComp = ({ state, dispatch }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const submitChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await userRegister(userInput);
    const { user, message } = data;
    if (user) {
      const { data } = await userLogin(userInput.email, userInput.password);
      const { user, message: messageLogin } = data;
      if (user) {
        setLoading(false);
        dispatch({ type: "SET_USER", payload: user });
      } else {
        setError(messageLogin);
      }
    }
    if (message) {
      setError(message);
    }
  };
  return (
    <RCContainer>
      <RCWrapper>
        <Column1>
          <Img src={registerImg} />
        </Column1>
        <Column2>
          <h2>Register</h2>
          {error && <p>{error}</p>}
          <FormContainer onSubmit={submitChange}>
            <InputGroup>
              <Input
                type="text"
                name="name"
                value={userInput.name}
                onChange={inputChange}
                required
                autoComplete="off"
              />
              <span>Name</span>
            </InputGroup>
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
              value={loading ? "We are taking you in" : "Register"}
              style={{
                marginTop: "20px",
                background: "#2756b3",
                color: "#fff",
                fontWeight: "bold",
              }}
            />
          </FormContainer>
          <Link
            to="/login"
            style={{
              marginTop: "20px",
              color: "#2756b3",
              fontWeight: "bold",
              alignSelf: "flex-start",
            }}
          >
            Already User?
          </Link>
        </Column2>
      </RCWrapper>
    </RCContainer>
  );
};

export default RegisterComp;
