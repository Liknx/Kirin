import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

import Dashboard from '../img/dashboard.png'
import '../css/beyond.css'

class Sidebar extends Component {
	render() {
		return (
            <div className="page-Sidebar">
			<ul>
				{/* <li><img alt="Dashboard" src={ Dashboard }></img>Dashboar</li>*/}
				<li><a href="www.google.com.co" name="productos" id="productos">Productos</a></li>
			</ul>
		</div>
		)
	}
}

export default Sidebar