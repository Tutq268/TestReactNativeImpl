import * as stargazer from './../constants/stargarzer'

const itinialState = {
    stargarzers : [],
    messageError: null
}

const StargazerReducer = (state = itinialState,action) =>{
    switch(action.type){
        case stargazer.FETCH_STARGAZER :
            return {...state,stargarzers: [],messageError: null}
        
        case stargazer.FETCH_STARGAZER_SUCCESS:
            return {...state,stargarzers: action.payload}
        
        case stargazer.FETCH_MORE_STARGAZER :
            return {...state}

        case stargazer.FETCH_MORE_STARGAZER_SUCCESS:
            const moreValue = action.payload
            return {...state,stargarzers: state.stargarzers.concat(moreValue)}

        case stargazer.FETCH_STARGAZER_ERROR:
            return {...state,messageError:action.payload}

        default :
        return state
    }
}
export default StargazerReducer