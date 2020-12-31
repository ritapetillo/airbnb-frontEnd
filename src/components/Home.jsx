import React , {useState,useEffect} from "react";
import "../style/Home.css";
import {Container} from 'react-bootstrap'
import SearchBar from "./SearchBar";
import {getListingsByCity} from '../lib/fetches'

function Home() {
  const [listings,setListings] = useState('')
  const handleSearch = async () =>{
const listings = await getListingsByCity('Miami FL')
setListings(listings)
console.log(listings)

  }


  return (
    <div className="home">
      <Container>
        <SearchBar handleSearch={handleSearch}/>
        <h1>Go Near</h1>
        <span className="home__cta"> Explore nearby stays</span>
      </Container>
    </div>
  );
}

export default Home;
