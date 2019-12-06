import * as load from './../constants/load'


export const showLoading = () =>{
    return {
        type: load.SHOW_LOAD
    }
}

export const hideLoading = () =>{
    return {
        type: load.HIDE_LOAD
    }
}