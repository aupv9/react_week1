import React, { Component } from 'react'
import {Route } from 'react-router-dom'
import Home from '../pages/home';
import Profile from '../pages/profile';


export default class RouterURL extends Component {
    render() {
        return (
               <div>
               <Route exact path="/" component={Home} />
               <Route path="/profile" component={Profile} />  
               </div>
           
        )
    }
}
