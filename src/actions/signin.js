import axios from 'axios'
import Cookies from 'universal-cookie'
import { API_URL, CLIENT_ROOT_URL, messageHandler } from './index'
import { createAxiosInstance } from '../utils/helpers'
import * as types from './types'

const cookie = new Cookies()

export function signIn(credentials, callback) {
    return function (dispatch) {
        if(!credentials.username||!credentials.password){   
            console.log('sin datos');
            dispatch({type: types.MOSTRAR_MENSAJE, payload: { type: 'warning', message: 'Datos Sin Ingresar' }})
            if (callback instanceof Function) {
                callback()
            }
        }else{
            const axios = createAxiosInstance()
            const data =
            {
                Usuario: credentials.username,
                Contrasena: credentials.password,
            }
            axios
            .post(`${API_URL}/controllers/index.php`,data)
            .then((res) => {
                if (res.data.status && res.data.usuario.cedula !== ""){
                    cookie.set('user', res.data.usuario, { path: '/' })
                    cookie.set('token', res.data.novoToken, { path: '/' })
                    const usuario = credentials.username
                    const rol = res.data.usuario.rol
                    const cedula = res.data.usuario.cedula
                    dispatch({ type: types.INICIAR_SESION, payload: res.data.usuario })
                    window.location.href = `${CLIENT_ROOT_URL}`
                }else{
                    dispatch({type: types.MOSTRAR_MENSAJE, payload: { type: 'danger', message: 'Usuario o Contraseña Incorrectas' }})
                    const fn5 = d => d({ type: types.PROCESAMIENTO_SIGNIN_PAGE, payload: false  })
                    if (callback instanceof Function) {
                        callback()
                    }
                }
            })
            .catch((err) => {
                console.log('err--->',err)
                if (err.response && err.response.status === 401) {
                    dispatch({type: types.MOSTRAR_MENSAJE, payload: { type: 'danger', message: 'Nombre de usuario o contraseña incorrectas' }})
                    const fn5 = d => d({ type: types.PROCESAMIENTO_SIGNIN_PAGE, payload: false  })
                    if (callback instanceof Function) {
                        callback()
                    }
                } else {
                    messageHandler(dispatch, err.response)
                }
                if (callback instanceof Function) {
                    callback()
                }
            })
        }
    }
}

export function updateInputs(path, value) {
    return (dispatch) => {
        dispatch({ type: types.MODIFICAR_INPUTS_INICIO_SESION, payload: { path, value } })
    }
}

export function signOut() {
    return function (dispatch) {
        dispatch({ type: types.CERRAR_SESION })
        cookie.remove('token', { path: '/' })
        cookie.remove('user', { path: '/' })
        cookie.remove('cc', { path: '/' })
        window.location.href = `${CLIENT_ROOT_URL}/signin`
    }
}

export function signOutOn401(dispatch) {
    cookie.remove('token', { path: '/' })
    cookie.remove('user', { path: '/' })
    cookie.remove('cc', { path: '/' })
    dispatch({ type: types.CERRAR_SESION })
}
