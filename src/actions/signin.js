import axios from 'axios'
import Cookies from 'universal-cookie'
import { API_URL, CLIENT_ROOT_URL, messageHandler } from './index'
import { createAxiosInstance } from '../utils/helpers'
import * as types from './types'

const cookie = new Cookies()

export function getSignin() {
    const axios = createAxiosInstance()
	return (dispatch) => {
		axios.get('http://localhost/Kirin_Back/controllers/signin')
		.then((res) => {
            console.log('res--->',res)
        })
		.catch((err) => {
            console.log('err--->',err)
        })
    }
}

export function signIn(credentials, callback) {
    return function (dispatch) {
        // if(!credentials.username||!credentials.password){
        if(1 != 1){
            console.log('sin datos');
        }else{
            const axios = createAxiosInstance()
            const data = 
            // 'usuario=login&contrasena=segurança'
            {
                Usuario: 'login',
                Contrasena: 'segurança'
            }
            console.log('data',data)
            axios
            .post(`http://localhost/Kirin_Back/controllers/signin`,data)
            .then((res) => {
                if (res.status !== false && res.rol !== 0) {
                    console.log('Ok--->',res);
                } else {
                    console.log('Fail--->',res);
                }
                if (callback instanceof Function) {
                    callback()
                }
            })
            .catch((err) => {
                console.log('err--->',err)
                if (err.response && err.response.status === 401) {
                    // dispatch({type: types.MOSTRAR_MENSAJE, payload: { type: 'danger', message: 'Nombre de usuario o contraseña incorrectas' }})
                    // const fn5 = d => d({ type: types.PROCESAMIENTO_SIGNIN_PAGE, payload: false  })
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
