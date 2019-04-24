import { combineReducers } from 'redux'

import signinReducer from './signin'
import messageHandling from './messageHandling'
import dashboardReducer from './dashboard'

const appReducer = combineReducers({
    signin: signinReducer,
    messages: messageHandling,
    dashboard: dashboardReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'CERRAR_SESION') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer
