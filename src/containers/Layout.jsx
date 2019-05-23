import React, { Component } from 'react'
import { connect } from 'react-redux';

import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar.js'
import Sidebar from '../components/Sidebar.js'

import '../css/layout.css'

class Layout extends Component{

    constructor(props){
        super(props)
        this.state = {
        }
    }
    
    render(){
        return(
            <div>
                <Navbar />
                <Sidebar />
				<Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }    
}

export default connect(null, null)(Layout)
