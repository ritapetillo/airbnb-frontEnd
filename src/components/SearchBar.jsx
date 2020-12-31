import React from 'react'
import '../style/SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    return (
        <div className="SearchBar d-flex flex-row">
            <div className="SearchBar__input-box">
                <small>Location</small>
                <input placeholder="Where are you going?" name="location" type="text"/>
            </div>
            <div className="SearchBar__input-box">
            <small>Check in</small>
            <input placeholder="Add dates" name="checkIn" type="date"/>
            </div>
            <div className="SearchBar__input-box">
            <small>Check out</small>
            <input placeholder="Add dates" name="checkOut" type="date"/>
            </div>
            <div className="SearchBar__input-box">
            <small>Guests</small>
                <input placeholder="Add guests" name="guests" type="number"/>
            </div>
            <div className="SearchBar__search-box d-flex align-items-center">
                <span className="d-flex"><SearchIcon/> Search</span>
            </div>

        </div>
    )
}

export default SearchBar
