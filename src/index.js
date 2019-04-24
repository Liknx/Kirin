import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Cookies from 'universal-cookie'

import routes from './routes'
import history from './utils/history'
import store from './utils/store'

import { INICIAR_SESION } from './actions/types'

// import './css/bootstrap.css'
// import './css/beyond.css'
// import './css/fonts.css'
// import './css/main.css'
// import './css/font-awesome.css'
// import './css/animate.css'
import 'react-toastify/dist/ReactToastify.min.css'

const cookie = new Cookies()

const token = cookie.get('token')
const user = cookie.get('user')
if (token) {
    store.dispatch({ type: INICIAR_SESION, payload: user })
}
window.root = window.document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={ history }>
                { routes }
            </Router>
            <ToastContainer />
        </div>
    </Provider>
    , window.root
)