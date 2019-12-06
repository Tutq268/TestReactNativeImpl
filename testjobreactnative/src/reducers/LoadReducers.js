import * as load from './../constants/load'

const itinialState = {
    loading: false
}
const loadReducers = (state = itinialState,action) =>{
    switch(action.type){
        case load.SHOW_LOAD:
            return {...state,loading: true}

        case load.HIDE_LOAD:
            return {...state,loading: false}
            
        default:
            return state
    }
}
export default loadReducers