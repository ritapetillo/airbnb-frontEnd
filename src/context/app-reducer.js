import {SEARCH_LISTINGS} from './app-actions'

const appReducer = (state,action)=>{
    console.log(action)
    switch (action.type){
        case SEARCH_LISTINGS:
        console.log(action.type)
        return{
            ...state,
            listings:action.payload
        }
        
        default:
            return state

    }
}


export default appReducer