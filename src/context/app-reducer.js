import {SEARCH_LISTINGS,AUTH,LOGOUT} from './app-actions'

const appReducer = (state,action)=>{
    console.log(action)
    switch (action.type){
        case SEARCH_LISTINGS:
        return{
            ...state,
            listings:action.payload
        }
        case AUTH:
        return{
            ...state,
            user:action.payload,
            isAuth:true
        }
        case LOGOUT:
        return{
            ...state,
            user:"",
            isAuth:false
        }
        
        
        default:
            return state

    }
}


export default appReducer