import React from "react";
import "../style/Home.css";
import {Container} from 'react-bootstrap'
import SearchBar from "./SearchBar";

function Home() {
  return (
    <div className="home">
      <Container>
        <SearchBar/>
        <h1>Go Near</h1>
        <span className="home__cta"> Explore nearby stays</span>
      </Container>
    </div>
  );
}

export default Home;
