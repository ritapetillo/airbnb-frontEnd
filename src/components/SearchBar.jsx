import React, {useState,useContext, useEffect} from 'react'
import '../style/SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';
import AppContext from '../context/app-context'

function SearchBar({history}) {
    const [queries,setQueries] = useState({})
    const {listings,getListings,lastSearch} = useContext(AppContext)
    useEffect(()=>{
        if(lastSearch) setQueries(lastSearch)

    },[])

    const handleSearch = async (queries) =>{
        console.log(queries)
        console.log(localStorage.getItem('TOKEN'))

    getListings(queries)
    
    console.log()
    history.push('/search')
   
      }


    return (
        <>
        <div className="SearchBar d-flex flex-row">
            <div className="SearchBar__input-box">
                <small>Location</small>
                <input placeholder="Where are you going?" value={queries?.city} name="location" type="text" onChange={(e)=>setQueries({...queries,city:e.target.value})}/>
            </div>
            <div className="SearchBar__input-box">
            <small>Check in</small>
            <input placeholder="Add dates"  value={queries?.checkin} name="checkIn" type="date" onChange={(e)=>setQueries({...queries,checkin:e.target.value})}/>
            </div>
            <div className="SearchBar__input-box">
            <small>Check out</small>
            <input placeholder="Add dates" name="checkOut" value={queries?.checkout} type="date" onChange={(e)=>setQueries({...queries,checkout:e.target.value})}/>
            </div>
            <div className="SearchBar__input-box">
            <small>Guests</small>
                <input placeholder="Add guests" value={queries?.guests} name="guests" type="number" onChange={(e)=>setQueries({...queries,guests:e.target.value})}/>
            </div>
            <div className="SearchBar__search-box d-flex align-items-center">
                <span className="d-flex" onClick={()=>handleSearch(queries)}><SearchIcon/> Search</span>
            </div>

        </div>
     
        </>
    )
}

export default SearchBar
