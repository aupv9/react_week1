import React, { Component } from 'react';
import './style.scss';
import logo from '../../img/terra-logo.png';
import {Link} from 'react-router-dom';

class Header extends Component {

    state={
        sign:0
    }
    // ẩn hiện option logout
    showOption=()=>{
        var d = document.getElementById("option-profile");
        if(this.state.sign % 2 === 0){
            d.classList.add("show-box");
            this.state.sign++;
        }else{
            d.classList.remove("show-box");
            this.state.sign++;
        }
    }

    render() {
        return (
            <div className="row" id="header">
                <div className="header-logo">
                    <Link to="/"> <img src={logo} id="logo"></img></Link> 
                </div>
                <div className="header-right">
                    <a href="#" onClick={this.showOption} ><p>PROFILE</p></a>
                    <ul id="option-profile" className="">
                        <li>
                            <a><span>Profile</span></a>
                        </li>
                        <li>
                            <a><span>Logout</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;