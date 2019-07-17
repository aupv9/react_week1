import React, { Component } from 'react';
import HomeLeft from '../../components/homeleft';
import HomeRight from '../../components/homeright';
import './style.scss';
class Home extends Component {
    render() {
        return (
           <div id="home" className="container-fuild">
               <div className="row w-100">
               <HomeLeft></HomeLeft>
                <HomeRight></HomeRight>
               </div>
               
           </div>
        );
    }
}

export default Home;