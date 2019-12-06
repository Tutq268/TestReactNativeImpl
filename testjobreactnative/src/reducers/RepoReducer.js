import * as repo from './../constants/repo'
const itinialState = {
    reposInfo :null,
    repos : [],
    messageFailed : null
}
const repoReducer = (state = itinialState,action)=>{
    switch(action.type){
        case repo.GET_REPO_INFO :
            return {...state,reposInfo: null,repos: []}

        case repo.GET_REPO_INFO_SUCCESS:
            return {...state,reposInfo: action.payload}

        
        case repo.FETCH_REPO_SUCCESS:
            return {...state,repos :action.payload,messageFailed:null}

        case repo.FETCH_MORE_REPO:
            return {...state}
        
        case repo.FETCH_MORE_REPO_SUCCESS:
            const moreRepo = action.payload
            return {...state,repos: state.repos.concat(moreRepo)}
        
        case repo.FETCH_REPO_ERROR :
            return {...state,messageFailed: action.payload,repos: [],reposInfo: null}

        default:
            return state
    }
}
export default repoReducer