
import React , {useState,useEffect,useContext,useRef} from "react";
import "../style/Home.css";
import {Container} from 'react-bootstrap'
import SearchBar from "./SearchBar";
import AppContext from '../context/app-context'

function Home({history}) {
  // const [listings,setListings] = useState('')


  return (
    <div className="home">
      <Container>
        <SearchBar history={history}/>
        <h1>Go Near</h1>
        <span className="home__cta"> Explore nearby stays</span>
      </Container>
    </div>
  );
}

export default Home;
