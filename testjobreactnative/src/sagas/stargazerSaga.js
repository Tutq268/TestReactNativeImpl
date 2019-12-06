import {takeEvery,put} from 'redux-saga/effects'
import * as stargazer from './../constants/stargarzer'
import {StatusCode} from './../constants/index'


import {fetchStargazerSuccess,fetchStargazerError,fetchMoreStargazerSuccess} from './../action/stargazerAction'
import {showLoading,hideLoading} from './../action/loadActions'

import {getStargazerData} from './../API/api'

function* fetchListStargazer({payload}){
    yield put(showLoading())
    const getList = yield getStargazerData(payload,1)
    if(getList.status === StatusCode.SUCCESS ){
        yield put(fetchStargazerSuccess(getList.data))
        yield put(hideLoading())
    }else{
        yield put(fetchStargazerError("server error"))
        yield put(hideLoading())
    }
}

export function* fetchStargazer(){
   yield takeEvery(stargazer.FETCH_STARGAZER,fetchListStargazer)
}

function* fetchMoreListStargazer({payload}){
    const {full_name,page} = payload
    yield put(showLoading())
    const getList = yield getStargazerData(full_name,page)
    if(getList.status === StatusCode.SUCCESS ){
        console.log("getList: " + getList)
        yield put(fetchMoreStargazerSuccess(getList.data))
        yield put(hideLoading())
    }else{
        yield put(fetchStargazerError("server error"))
        yield put(hideLoading())
    }
}

export function* fetMoreStargazer(){
    yield takeEvery(stargazer.FETCH_MORE_STARGAZER,fetchMoreListStargazer)
}