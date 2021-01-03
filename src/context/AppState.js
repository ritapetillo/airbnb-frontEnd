import React,{useState,useReducer} from 'react'
import { SEARCH_LISTINGS } from './app-actions'
import AppContext from './app-context'
import appReducer from './app-reducer'
import {getListingsResearch} from '../lib/fetches'

function AppState(props) {
    const [isAuth,setisAuth] = useState(false)
    const [lastSearch,setLastSearch]= useState()
    const initialState={
        listings:[]
    }
    const [state,dispatch] = useReducer(appReducer,initialState)

    const getListings = async (queries)=>{
        const {city,
            checkin,
            checkout,
            guests} = queries
        setLastSearch(queries)
try{
    const listings = await getListingsResearch(city,checkin,checkout,guests)
    dispatch({
        type:SEARCH_LISTINGS,
        payload:listings

    })
}catch(err){
    console.log(err)
}
     
    }

    return (
       <AppContext.Provider value={{listings:state.listings,isAuth,setisAuth,getListings,lastSearch}}>
           {props.children}
       </AppContext.Provider>
    )
}

export default AppState
