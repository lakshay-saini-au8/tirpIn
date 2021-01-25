import { Switch, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./globalStyles";
import Home from "./pages";
import Navbar from "./components/Navbar";
import { useTheme } from "./customHook/useTheme";
import HotelDetail from "./pages/hotelDetail";
import HotelList from "./pages/hotelList";
import Login from "./pages/login";
import Register from "./pages/register";
import BookingPage from "./pages/bookingPage";
import BookingList from "./pages/bookingList";

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
        <Route exact path="/booking/:id" component={BookingPage} />
        <Route exact path="/allBooking" component={BookingList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
