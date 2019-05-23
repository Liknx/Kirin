import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import '../css/beyond.css'

class Footer extends Component {
	render() {

		return (
            <div className="page-footer" >
                <div className="footer-copyright">
                    <span className="copyright-symbol">
                        © 
                    </span> 2019 Liknx Developers
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