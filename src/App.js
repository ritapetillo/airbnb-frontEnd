import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import ListingsMap from "./components/ListingsMap";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/search" render={(props) => <SearchPage {...props} />} />
        <Route exact path="/map" render={(props) => <ListingsMap {...props} />} />

      </Switch>
    </div>
  );
}

export default App;
