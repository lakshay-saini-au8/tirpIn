import { Switch, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./globalStyles";
import Home from "./pages";
import Navbar from "./components/Navbar";
import { useTheme } from "./customHook/useTheme";
import HotelDetail from "./pages/hotelDetail";
import HotelList from "./pages/hotelList";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyle theme={theme} />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list/:id" component={HotelList} />
        <Route exact path="/details/:id" component={HotelDetail} />
      </Switch>
    </>
  );
}

export default App;
