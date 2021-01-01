import React , {useState,useEffect,useContext} from "react";
import "../style/Home.css";
import {Container} from 'react-bootstrap'
import SearchBar from "./SearchBar";
import {getListingsByCity} from '../lib/fetches'
import AppContext from '../context/app-contex'

function Home() {
  // const [listings,setListings] = useState('')
  const {message,isAuth,setisAuth,listings,getListings} = useContext(AppContext)
  const handleSearch = async () =>{
// const listings = await getListingsByCity('Miami FL')
getListings('prova')

// setListings(listings)
console.log(message)
setisAuth(!isAuth)
console.log(isAuth)
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
