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
            dispatch({type: types.MOSTRAR_MENSAJE, payload: { type: 'warning', message: 'Datos sin Ingresar' }})
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
                if (res.data.status && res.data.cedula !== "") {
                    console.log('res--->',res.data)
                    cookie.set('user', credentials.username, { path: '/' })
                    cookie.set('token', res.data.novoToken, { path: '/' })
                    const usuario = credentials.username
                    const rol = res.data.rol
                    const cedula = res.data.cedula
                    dispatch({ type: types.INICIAR_SESION, payload: { usuario, rol, cedula }})
                    window.location.href = `${CLIENT_ROOT_URL}`
                } else {
                    console.log('Fail--->',res);
                }
            })
            .catch((err) => {
                console.log('err--->',err)
            })
        }
    }
}

// export function updateInputs(path, value) {
//     return (dispatch) => {
//         dispatch({ type: types.MODIFICAR_INPUTS_INICIO_SESION, payload: { path, value } })
//     }
// }

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
