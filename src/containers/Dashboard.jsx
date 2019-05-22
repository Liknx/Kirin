import React, { Component } from 'react'
import { connect } from 'react-redux';

import { signOut } from '../actions/signin'
import { clearMessage } from '../actions/index'

class Dashboard extends Component{

    constructor(props){
        super(props)
        // this.state = {
        // }
    }
    
    render(){

        const { isAuthenticated, user } = this.props
        console.log('isAuthenticated--->',isAuthenticated)
        console.log('user--->',user)

        return(
            <div>
                <h1>Dashboard</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state--->',state.signin)
    return {
        messages: state.messages.get('message'),
        isAuthenticated: state.signin.get('isAuthenticated'),
        user: state.signin.get('user').toJS(),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(signOut()),
        clearMessage: () => dispatch(clearMessage()),
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
