import React, { Component } from 'react'
import { BrowserRouter as Router ,Route,Link } from 'react-router-dom'
import App from '../App';
import Home from '../pages/home';
import Profile from '../pages/profile';






export default class RouterURL extends Component {
    render() {
        return (
           <Router >
               <div>
               <Route exact path="/" component={Home} />
               <Route path="/profile" component={Profile} />
               
               </div>
           </Router>
           
        )
    }
}
