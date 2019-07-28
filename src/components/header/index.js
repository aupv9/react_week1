import React, { Component } from 'react';
import './style.scss';
import logo from '../../img/terra-logo.png';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="row" id="header">
                <div className="header-logo">
                    <Link to="/"> <img src={logo} id="logo"></img></Link> 
                </div>
                <div className="header-right">
                    <a href="#"><p>PROFILE</p></a>
                </div>
            </div>
        );
    }
}

export default Header;