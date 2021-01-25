import RegisterComp from "../components/RegisterComp";
import { useUserContext } from "../customHook/useUserContext";
import { Redirect } from "react-router-dom";

const Register = () => {
  const { state, dispatch } = useUserContext();
  const { userInfo } = state;
  return userInfo ? (
    <Redirect to="/" />
  ) : (
    <RegisterComp state={state} dispatch={dispatch} />
  );
};

export default Register;
