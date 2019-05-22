import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class Footer extends Component {
	render() {

		return (
            <div className="page-footer" style={ this.props.menuCompact ? { left: '47px'} : { left: '224px'} } >
                <div className="footer-copyright">
                    <span className="copyright-symbol">
                        © 
                    </span> 2019 Liknx
                </div>
                <div className="footer-buttons">
                    <a href="#">
                        <FontAwesome name="external-link" />
                    </a>
                </div>
            </div>
		)
	}
}

export default Footer