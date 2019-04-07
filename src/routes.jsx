import React from 'react'
import { Route, Switch } from 'react-router'

import SignIn from './containers/SignIn'

export default (
	<Switch>
		<Route exact path="/" component={ SignIn } />
	</Switch>
)