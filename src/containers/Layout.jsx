import React, { Component } from 'react'
import { connect } from 'react-redux';

class Layout extends Component{

    constructor(props){
        super(props)
        this.state = {
        }
    }
    
    render(){

        return(
            <div>
                <h1>Layout</h1>
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

export default connect(null, null)(Layout)
