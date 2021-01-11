import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import ListingsMap from "./components/ListingsMap";
import ListingPage from "./components/ListingPage";
import ConfirmBooking from "./components/ConfirmBooking";
import Bookings from "./components/Bookings";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/search"
          render={(props) => <SearchPage {...props} />}
        />
        <Route
          exact
          path="/map"
          render={(props) => <ListingsMap {...props} />}
        />
        <Route
          exact
          path="/listing/:id"
          render={(props) => <ListingPage {...props} />}
        />
        <Route
          exact
          path="/booking"
          render={(props) => <ConfirmBooking {...props} />}
        />
        <Route
          exact
          path="/bookings"
          render={(props) => <Bookings {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
