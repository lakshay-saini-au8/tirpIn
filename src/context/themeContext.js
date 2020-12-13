import { useState } from "react";
import { ThemeProvider } from "styled-components";
const lightTheme = {
  primaryColor: "#2756b3",
  grey: "#9ea2a6",
  text: "#171414",
  bodyBackground: "#F2F7FA",
  shadow: "rgb(0 0 0 / 34%) 2px -1px 15px 0px",
};
const darkTheme = {
  primaryColor: "#2756b3",
  grey: "#9ea2a6",
  text: "#fff",
  bodyBackground: "#171414",
  shadow: "rgb(255 255 255 / 34%) 2px -1px 15px 0px",
};

export const AppThemeProvider = (props) => {
  const [themeMode, setThemeMode] = useState("light");
  const theme = themeMode === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={{ theme, themeMode, setThemeMode }}>
      {props.children}
    </ThemeProvider>
  );
};
