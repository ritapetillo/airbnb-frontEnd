import React,{useContext, useState} from 'react'
import '../style/SmSearchBar.css'
import moment from 'moment'
import AppContext from '../context/app-context'
import SearchIcon from '@material-ui/icons/Search';

function SmSearchBar({setSearchActive}) {
    const {lastSearch} = useContext(AppContext)

    return (
   
        <div className="SmSearchBar ml-auto" onClick={()=>{
            setSearchActive(true)
        }}>
             {lastSearch &&<>
            <span>{lastSearch.city}</span>
            <span>{moment(lastSearch.checkin).format('ll')} - {moment(lastSearch.checkout).format('ll')}</span>
            <span className="d-flex">{lastSearch.guests} guests <span className="SmSearchBar__search"><SearchIcon/></span></span></>
            }
            
        </div>
    )
}

export default SmSearchBar
