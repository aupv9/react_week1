import React, { Component } from 'react';
import './style.scss';
import logo from '../../img/terra-logo.png';

class Header extends Component {
    render() {
        return (
            <div className="row" id="header">
                <div className="header-logo">
                    <img src={logo} id="logo"></img>
                </div>
                <div className="header-right">
                    <a href="#"><p>PROFILE</p></a>
                </div>
            </div>
        );
    }
}

export default Header;