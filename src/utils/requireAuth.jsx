import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { signOut } from '../actions/auth'
import { modulos } from './constants'

export default function (ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.history.push('/signin')
                this.props.signOut()
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.history.push('/signin')
                this.props.signOut()
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.auth.get('isAuthenticated'),
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            signOut: () => dispatch(signOut()),
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Authentication)
}