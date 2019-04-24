import * as types from './types'
import { signOutOn401 } from './signin'
import { createAxiosInstance } from '../utils/helpers'

export const API_URL = window.API_URL
export const CLIENT_ROOT_URL = window.CLIENT_ROOT_URL

export function clearMessage() {
    return (dispatch) => {
        dispatch({ type: types.LIMPIAR_MENSAJES })
    }
}

export function messageHandler(dispatch, error) {
    let theMessage = { type: 'warning', message: '' }
 
    if (error.response) {
        // console.log('error.response',error.response)
        console.log('err--->1')
        if (error.response.status === 400 && error.response.data) {
            console.log('err--->2')
            if (error.response.data.ModelState) {
                console.log('err--->3')
                for (var property in error.response.data.ModelState) {
                    if (error.response.data.ModelState.hasOwnProperty(property)) {
                        console.log('err--->4')
                        for (let n = 0; n < error.response.data.ModelState[property].length; n++) {
                            // console.log('error.response.data',error.response.data.ModelState[property][n])
                            dispatch({type: types.MOSTRAR_MENSAJE, payload: { type: 'danger', message: error.response.data.ModelState[property][n] }})
                        }
                    }
                }
            } else {
                console.log('err--->5')
                // console.log('err--->5--->error',error)
                dispatch({type: types.MOSTRAR_MENSAJE, payload: { type: 'danger', message: error.response.data }})
            }
        } else if (error.response.status === 401) {
            console.log('err--->6')
            dispatch({ type: types.MOSTRAR_MENSAJE, payload: { type: 'danger', message: 'No está autorizado para proceder con esta solicitud. Por favor, inicie sesión y vuelva a intentarlo' } })
            signOutOn401(dispatch)
        } else if (error.response.status === 500) {
            console.log('err--->7')
            let msg = ''
            if (typeof error.response.data === 'string') {
                console.log('err--->8')
                msg = error.response.data
            } else {
                console.log('err--->9')
                const innerException = getInnerException(error.response.data)
                msg = innerException.ExceptionMessage
                if (!msg) {
                    console.log('err--->10')
                    msg = innerException.Message
                }
                if (!msg) {
                    console.log('err--->11')
                    msg = innerException
                }
            }
            dispatch({ type: types.MOSTRAR_MESSAGE_BOX, payload: { show: true, message: msg }})
        }
    } else {
        if (error.data) {
            console.log('err--->12')
            theMessage.type = 'danger'
            theMessage.message = error.data.Message
        } else if (error.message) {
            console.log('err--->13')
            theMessage.type = 'danger'
            theMessage.message = error.message
        } else if (error.success) {
            console.log('err--->14')
            theMessage.type = 'success'
            theMessage.message = error.success
        } else if (error.warning) {
            console.log('err--->15')
            theMessage.type = 'warning'
            theMessage.message = error.warning
        } else {
            console.log('err--->16')
            theMessage.type = 'danger'
            theMessage.message = error
        }

        dispatch({ type: types.MOSTRAR_MENSAJE, payload: theMessage })
    }

    if (error.status === 401) {
        console.log('err--->18')
        dispatch({type: types.MOSTRAR_MENSAJE, payload: { type: 'danger', message: 'No esta autorizado. Por favor, inicie sesión y vuelva a intentarlo' }})
        signOutOn401(dispatch)
    }
}

function getInnerException(obj) {
    if (obj instanceof Object && obj.InnerException) {
        return getInnerException(obj.InnerException)
    } else {
        const toReturn = {...obj}
        return toReturn
    }
}

