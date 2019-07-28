import React, { Component } from 'react';
import HomeLeft from '../../components/homeleft';
import './style.scss';
import {Route } from 'react-router-dom'
import Login from '../../components/login';
import SignUp from '../../components/signup';
class Home extends Component {
    render() {
        console.log(this.props)
        return (
           <div id="home" className="container-fuild">
               <div className="row w-100 h-100">
               <HomeLeft></HomeLeft>
               
               <Route exact path={`${this.props.match.url}`} component={Login}></Route>
               <Route  path={`${this.props.match.url}/login`} component={Login}></Route>
               <Route  path={`${this.props.match.url}/sign-up`} component={SignUp}></Route>

               </div>
               
           </div>
        );
    }
}

export default Home;