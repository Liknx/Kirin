import React from 'react'
import { Route, Switch } from 'react-router'

import SignIn from './containers/SignIn'
import Layout from './containers/Layout'
import Dashboard from './containers/Dashboard'

// import requireAuth from './utils/requireAuth'

export default (
	<Switch>
		<Route exact path="/signin" component={ SignIn } />
		{/* <Layout> */}
			<Route exact path="/" component={ Dashboard } />
		{/* </Layout> */}
	</Switch>
)