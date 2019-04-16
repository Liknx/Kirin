import { combineReducers } from 'redux'

import signinReducer from './signin'

const appReducer = combineReducers({
    signin: signinReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'CERRAR_SESION') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer
