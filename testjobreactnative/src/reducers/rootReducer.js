import { combineReducers } from 'redux'
import RepoReducers from './RepoReducer'
import LoadReducers from './LoadReducers'
export default combineReducers({
   repo: RepoReducers,
   load: LoadReducers
})