import * as types from '../actions/types'
import Immutable from 'immutable'

// import {
//     isPrimitive
// } from '../utils/helpers'

const INITIAL_STATE = Immutable.fromJS({
    user:{
        Username: null,
        Cedula: null,
        Role: null
    },
    password: '',
    processing: false,
    isAuthenticated: false,
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.INICIAR_SESION:
            state = state.set('isAuthenticated', true)
            state = state.setIn(['user','Username'], Immutable.fromJS(action.payload.Username))
            state = state.setIn(['user','Role'], Immutable.fromJS(action.payload.Role))
            state = state.setIn(['user','Cedula'], Immutable.fromJS(action.payload.Cedula))
            // console.log('user---*>',state.get('user'))
            return state
        case types.CERRAR_SESION:
            state = state.set('isAuthenticated', false)
            state = state.set('user', null)
            return state
        // case types.MODIFICAR_INPUTS_INICIO_SESION:
        //     if (isPrimitive(action.payload.value)) {
    	// 		state = state.setIn(`${action.payload.path}`.split('.'), action.payload.value)
        //     } else {
        //         state = state.setIn(`${action.payload.path}`.split('.'), Immutable.fromJS(action.payload.value))
        //     }
        //     return state
        // case types.PROCESAMIENTO_SIGNIN_PAGE:
        //     state = state.set('processing', action.payload)
        //     if (!action.payload) {
        //         state = state.set('password', '')
        //     }
        //     return state
        default:
            return state
    }
}