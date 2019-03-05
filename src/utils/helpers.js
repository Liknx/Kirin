import axios from 'axios'
import Cookies from 'universal-cookie'
import { API_URL } from '../actions/index'
import store from './store'

export function isPrimitive(test) {
    return (test !== Object(test))
}

export function createAxiosInstance() {
    // const token = cookie.get('token')
    const token = '3d524a53c110e4c22463b10ed32cef9d'
    return axios.create({
        baseURL: API_URL,
        headers: { 
            "Authorization": "3d524a53c110e4c22463b10ed32cef9d",
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        // headers: { "Content-Type": "application/json" }
    })
}