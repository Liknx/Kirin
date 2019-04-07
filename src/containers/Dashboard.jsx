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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem reprehenderit voluptatibus ipsa, dolorem odit, incidunt eius odio sequi totam cum illo veniam quam inventore facere perferendis accusamus illum corrupti excepturi.</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }    
}

export default connect(null, null)(Dashboard)
