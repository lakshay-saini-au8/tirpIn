import { Redirect, useLocation } from "react-router-dom";
import LoginComp from "../components/LoginComp";
import { useUserContext } from "../customHook/useUserContext";
const Login = () => {
  const { state, dispatch } = useUserContext();
  const { userInfo } = state;
  const param = useLocation();
  const id = param.search.split("=")[1];

  return userInfo ? (
    <Redirect to="/" />
  ) : (
    <LoginComp state={state} dispatch={dispatch} bookingId={id} />
  );
};

export default Login;
