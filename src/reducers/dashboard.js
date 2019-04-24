import * as types from '../actions/types'
import Immutable from 'immutable'

import {isPrimitive} from '../utils/helpers'

const INITIAL_STATE = Immutable.fromJS({
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state
    }
}