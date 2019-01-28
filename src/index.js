import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import routes from './routes'
import history from './utils/history'
import store from './utils/store'

import SignIn from './containers/SignIn';

ReactDOM.render(
        <SignIn />
        ,document.getElementById('root')
    );

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                {routes} 
            </Router>
        </div>
    </Provider>
    ,window.root
)