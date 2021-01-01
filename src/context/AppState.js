import React,{useState,useReducer} from 'react'
import { SEARCH_LISTINGS } from './app-actions'
import AppContext from './app-contex'
import appReducer from './app-reducer'

function AppState(props) {
    const [isAuth,setisAuth] = useState(false)
    const initialState={
        listings:[]
    }
    const [state,dispatch] = useReducer(appReducer,initialState)

    const getListings = (listings)=>{
        console.log(listings)
        console.log(state)
        dispatch({
            type:SEARCH_LISTINGS,
            payload:listings

        })
    }

    return (
       <AppContext.Provider value={{listings:state.listings,isAuth,setisAuth,getListings}}>
           {props.children}
       </AppContext.Provider>
    )
}

export default AppState
