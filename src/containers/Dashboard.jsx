import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dashboard extends Component{

    constructor(props){
        super(props)
        this.state = {
        }
    }
    
    render(){

        return(
            <div>
                <h1>Dashboard</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state',state)
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }    
}

export default connect(null, null)(Dashboard)
