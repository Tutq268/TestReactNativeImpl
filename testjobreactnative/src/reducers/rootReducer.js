import { combineReducers } from 'redux'
import RepoReducers from './RepoReducer'
import LoadReducers from './LoadReducers'
import StargazerReducers from './StargazerReducer'
export default combineReducers({
   repo: RepoReducers,
   load: LoadReducers,
   stargazer : StargazerReducers
})