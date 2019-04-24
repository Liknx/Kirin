import axios from 'axios'
import Cookies from 'universal-cookie'
import { API_URL } from '../actions/index'
import store from './store'

export function isPrimitive(test) {
    return (test !== Object(test))
}

const cookie = new Cookies()

export function createAxiosInstance() {
    const token = cookie.get('token')
    return axios.create({
        baseURL: API_URL,
        headers: { 
            "Authorization": token,
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    })
}
