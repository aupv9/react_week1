import React, { Component } from 'react'
import {Route,Switch } from 'react-router-dom'
import Home from '../pages/home';
import Profile from '../pages/profile';



export default class RouterURL extends Component {
    render() {
        return (

               <Switch>
                <Route  path="/home" component={Home} ></Route>   
                <Route exact path="/" component={Home} ></Route>
                <Route path="/profile"  component={({match})=> <Profile match={match}></Profile>} />  
               </Switch>
           
        )
    }
}
