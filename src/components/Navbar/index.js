import { useTheme } from "../../customHook/useTheme";
import { useUserContext } from "../../customHook/useUserContext";
import {
  NavContainer,
  NavWrapper,
  NavLogo,
  ThemeBtnDark,
  ThemeBtnLight,
  LoginBtn,
} from "./NavbarElements";
const Navbar = () => {
  const { theme, themeMode, setThemeMode } = useTheme();
  const { state, dispatch } = useUserContext();
  const { userInfo } = state;
  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    dispatch({ type: "RESET_USER" });
  };
  return (
    <NavContainer>
      <NavWrapper>
        <NavLogo to="/" theme={theme}>
          <span>Trip</span>.In
        </NavLogo>
        <div style={{ display: "flex" }}>
          {themeMode === "light" ? (
            <ThemeBtnDark onClick={() => setThemeMode("dark")} theme={theme} />
          ) : (
            <ThemeBtnLight
              onClick={() => setThemeMode("light")}
              theme={theme}
            />
          )}
          {userInfo ? (
            <LoginBtn to="#" onClick={handleLogout} theme={theme}>
              Logout
            </LoginBtn>
          ) : (
            <LoginBtn to="/login" theme={theme}>
              Login
            </LoginBtn>
          )}
        </div>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
