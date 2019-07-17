import React, { Component } from 'react';
import './style.scss';


class HomeLeft extends Component {


    render() {
        return (
            <div id="home-left" className="col-xl-6 col-12">
            <p id="first-mess">We are family</p>
            <p id="copy-right"><i className="far fa-copyright"></i>2019 Terralogic, InC</p>
            </div>
            
        );
    }
}

export default HomeLeft;