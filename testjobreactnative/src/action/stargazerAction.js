import * as stargazer from './../constants/stargarzer'

export const fetchStargazer = (data) =>{
    return {
        type: stargazer.FETCH_STARGAZER,
        payload: data
    }
}

export const fetchStargazerSuccess = data =>{
    return {
        type: stargazer.FETCH_STARGAZER_SUCCESS,
        payload: data
    }
}

export const fetchMoreStargazer = (full_name,page) =>{
    const data = {full_name,page}
    return {
        type: stargazer.FETCH_MORE_STARGAZER,
        payload: data
    }
}

export const fetchMoreStargazerSuccess = data =>{
    return {
        type: stargazer.FETCH_MORE_STARGAZER_SUCCESS,
        payload: data
    }
}


export const fetchStargazerError = message =>{
    return {
        type: stargazer.FETCH_STARGAZER_ERROR,
        payload: message
    }
}