import * as repo from './../constants/repo'



export const fetchRepoInfo = (username,page) =>{
    const data = {username,page}
    return {
        type: repo.GET_REPO_INFO,
        payload: data
    }
}

export const fetchRepoInfoSuccess = (data) =>{
    return {
        type: repo.GET_REPO_INFO_SUCCESS,
        payload: data
    }
}


export const fetchRepoSuccess = (data) =>{
    return {
        type: repo.FETCH_REPO_SUCCESS,
        payload: data
    }
}

export const fetchMoreRepo = (username,page) =>{
    const data = {username,page}
    return {
        type: repo.FETCH_MORE_REPO,
        payload: data
    }
}

export const fetMoreRepoSuccess = (moreRepo) =>{
    return{
        type: repo.FETCH_MORE_REPO_SUCCESS,
        payload: moreRepo
    }
}

export const fetchRepoFailed = (message) =>{
    return {
        type: repo.FETCH_REPO_ERROR,
        payload: message
    }
}

