import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../css/signin.css'
import banner from '../img/back.jpg'
import avatar from '../img/avatar.png'

class SignIn extends Component{

    constructor(props){
        super(props)
        this.state = {
            usuario: '',
            contrasena: '',
            signin: false,
            showPwd: false
        }
    }

    render(){
        return(
            <div className="login">
                {/* <div className="SignIn content-form-signin" style={{backgroundImage: `url(${banner})`}}> */}
                    <img src={ avatar } alt="profile photo" className="login_avatar"></img>
                    <form action="index.php" className="login_form">
                        <div className="login_block">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" className="login_input" placeholder="Enter your username"></input>
                        </div>
                        <div className="login_block">
                            <label for="username">Password:</label>
                            <input type="password" name="password" id="password" className="login_input" placeholder="Enter your password"></input>
                        </div>
                        <div className="login_block">
                            <a href="#">Forgot your password?</a>
                            <br></br>
                            <a href="#">Reister here!</a>
                        </div>
                        <div className="login_block">
                            <input type="submit" value="LogIn" className="login_btn"></input>
                        </div>
                    </form>
                {/* </div> */}
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

export default connect(null, null)(SignIn)