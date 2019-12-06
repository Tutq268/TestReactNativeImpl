import { baseUrl,users,repos,per_page } from './../constants/index'
// https://api.github.com/users/defunkt/repos?page=3&per_page=10
import axios from 'axios'
export const getRepoInfo = (username) =>{
    return axios.get(baseUrl + 'users/'+username).then(resp => { return resp.data}).catch(error => { return "error"})
}

export const getRepoData = (username,page) =>{
    return axios.get(baseUrl + 'users/'+username+'/repos?page='+page+'&per_page=30')
}
