import { useTheme } from "../../customHook/useTheme";
import {
  NavContainer,
  NavWrapper,
  NavLogo,
  ThemeBtnDark,
  ThemeBtnLight,
} from "./NavbarElements";
const Navbar = () => {
  const { theme, themeMode, setThemeMode } = useTheme();
  return (
    <NavContainer>
      <NavWrapper>
        <NavLogo to="/" theme={theme}>
          <span>Trip</span>.In
        </NavLogo>

        {themeMode === "light" ? (
          <ThemeBtnDark onClick={() => setThemeMode("dark")} theme={theme} />
        ) : (
          <ThemeBtnLight onClick={() => setThemeMode("light")} theme={theme} />
        )}
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
