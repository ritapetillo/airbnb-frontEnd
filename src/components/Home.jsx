import React from "react";
import "../style/Home.css";
import {Container} from 'react-bootstrap'
import SearchBar from "./SearchBar";

function Home() {
  return (
    <div className="home">
      <Container>
        <SearchBar/>
      </Container>
    </div>
  );
}

export default Home;
