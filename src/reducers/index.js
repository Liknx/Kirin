import { combineReducers } from 'redux'

const appReducer = combineReducers({
})

const rootReducer = () => {
    return appReducer(state, action)
}

export default rootReducer