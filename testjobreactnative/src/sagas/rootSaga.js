
import {all} from 'redux-saga/effects'
import {fetListRepoData,loadMoreRepos } from './repoSaga'
export default function* rootSaga(){
    yield all([
        fetListRepoData(),
        loadMoreRepos()
    ])
}