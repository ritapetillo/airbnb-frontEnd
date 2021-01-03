import React,{useContext} from 'react'
import '../style/SearchPage.css'
import {Container} from 'react-bootstrap'
import AppContext from '../context/app-context'
import moment from 'moment'
import ListingResult from './ListingResult'


function SearchPage() {
    const {listings,lastSearch} = useContext(AppContext)
    console.log(listings)

    return (
        <Container className="searchPage">
            <h6>{listings && listings.length} stays - {moment(lastSearch?.checkin).format('ll')} to {moment(lastSearch?.checkout).format('ll')} - {lastSearch?.guests} guests </h6>
            <h2 className="mb-4">Results for {lastSearch?.city} </h2>
           {listings && listings.map(listing=><ListingResult listing={listing} lastSearch={lastSearch}/>)}
           {/* Componet for each listing */}
        </Container>
    )
}

export default SearchPage
