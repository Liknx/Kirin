import React, { Component } from 'react'
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome'
import { signIn, getSignin } from '../actions/signin'
import Cookies from 'universal-cookie'
import { clearMessage } from '../actions/index'
import { toast } from 'react-toastify'

import '../css/signin.css'
// import banner from '../img/back.jpg'
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

    // componentWillMount() {
    //     const cookies = new Cookies()
    //     this.props.clearMessage()
    //     const token = cookies.get('token')
    //     if (token) {
    //         this.props.history.push('/')
    //     }
    // }
    
    // componentDidUpdate() {
    //     this.props.clearMessage()
    // }

    // componentDidMount() {
    //     this.props.getSignin()
    // }

    onSignIn = (e) => {
        e.preventDefault()
        this.setState({ signin: true })
        const data = { username: this.state.usuario, password: this.state.contrasena }
        this.props.signIn(data, () => { this.setState({ signin: false }) })
    }
    
    render(){
        const { messages } = this.props

        if (messages) {
            const { messages } = this.props
            switch (messages.type) {
                case 'danger':
                    toast.error(messages.message)
                    break
                case 'warning':
                    toast.warn(messages.message)
                    break
                default:
                    toast.info(messages.message)
            }
        }

        return(
            <div>
                <div className="login">
                    {/* <div className="SignIn content-form-signin" style={{backgroundImage: `url(${banner})`}}> */}
                        <img src={ avatar } alt="profile photo" className="login_avatar"></img>
                        <form onSubmit={this.onSignIn} className="login_form">
                            <div className="login_block">
                                <label>Username</label>
                                <input type="text" name="username" id="username" className="login_input" placeholder="Enter your username" onChange={ (e) => this.setState({ usuario: e.target.value }) } ></input>
                            </div>
                            <div className="login_block">
                                <label>Password:</label>
                                <input type="password" name="password" id="password" className="login_input" placeholder="Enter your password" onChange={ (e) => this.setState({ contrasena: e.target.value }) } ></input>
                                <FontAwesome 
                                    name="eye" 
                                    onMouseDown={ (e) => this.setState({ showPwd: true }) } 
                                    onMouseUp={ (e) => this.setState({ showPwd: false }) } 
                                    style={{ position: 'absolute', top: '7px', right: '5px' }}
                                />
                            </div>
                            <div className="login_block">
                                <a href="#">Forgot your password?</a>
                                <br></br>
                                <a href="#">Reister here!</a>
                            </div>
                            <button type="submit" value="LogIn" className="login_btn" disabled={ this.state.signin }>
                                {
                                    (this.state.signin) ? <span><FontAwesome name="cog" spin/>  Iniciando sesión ...</span> : 'Iniciar sesion'
                                }
                            </button>
                        </form>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log('state--->',state.signin.get('user').toJS())
    return {
        messages: state.messages.get('message'),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: (credentials,callback) => dispatch(signIn(credentials,callback)),
        clearMessage: () => dispatch(clearMessage())
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)