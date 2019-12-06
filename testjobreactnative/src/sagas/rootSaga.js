
import {all} from 'redux-saga/effects'
import {fetListRepoData,loadMoreRepos } from './repoSaga'
import {fetchStargazer,fetMoreStargazer} from './stargazerSaga'


export default function* rootSaga(){
    yield all([
        fetListRepoData(),
        loadMoreRepos(),
        fetchStargazer(),
        fetMoreStargazer()
    ])
}