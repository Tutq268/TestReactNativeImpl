import * as repo from './../constants/repo'
import { takeEvery,put,select,call } from 'redux-saga/effects'
import {showLoading,hideLoading} from './../action/loadActions'
import { fetchRepoInfoSuccess,fetchRepoSuccess,fetchRepoFailed,fetMoreRepoSuccess } from './../action/repoActions'
import { getRepoData,getRepoInfo } from './../API/api'
import {StatusCode} from './../constants/index'
import axios from 'axios'
export function* fetListRepoData(){
    yield takeEvery(repo.GET_REPO_INFO,fetList)
}
function* fetList({payload}){
    yield put(showLoading())
    const getInfo = yield getRepoInfo(payload.username)
    
    if(getInfo === "error"){
        yield put(fetchRepoFailed("User Không Tồn Tại"))
        yield put(hideLoading())
        return

    }
    else if(getInfo.public_repos == 0){
        yield put(fetchRepoFailed('User này không có repository nào hết.'))
        yield put(hideLoading())

    }
    else{
        yield put(fetchRepoInfoSuccess(getInfo))
        const resp = yield getRepoData(payload.username,payload.page)
        if(resp.status === StatusCode.SUCCESS){
            yield put(fetchRepoSuccess(resp.data))
            yield put(hideLoading())
        }else{
            yield put(fetchRepoFailed('Xảy Ra Lỗi'))
            yield put(hideLoading())
        }
    }
}

function* fetchMoreRepos({payload}){
    const { username,page } = payload
    yield put(showLoading())
    const resp = yield getRepoData(username,page)
    if(resp.status === StatusCode.SUCCESS){
        yield put(fetMoreRepoSuccess(resp.data))
        console.log("more: "+resp.data )
        yield put(hideLoading())
    }
    else{
        yield put(fetchRepoFailed('Xảy Ra Lỗi'))
        yield put(hideLoading())
    }
}

export function* loadMoreRepos(){
    yield takeEvery(repo.FETCH_MORE_REPO,fetchMoreRepos)
}