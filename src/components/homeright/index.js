import React, { Component } from 'react';
import './style.scss';
import {Typography }from '@material-ui/core';



class HomeRight extends Component {

    // method lấy element qua Id
    getById= (id)=>{
        return document.getElementById(id);
    }

    // getElementByTag=(tag)=>{
    //     return document.getElementsByTagName(tag);
    
    // }
    constructor(props, context) {
        super(props, context);
        // this.showSignUp.bind(this);
        this.state={
            flagSign:false,
            flagLog:true
        }
    }
    

    // function thực thi onclick của button sign up

    showSignUp=()=>{
        
        
       let signupElement=this.getById("title-signup");
       
       let loginElement=this.getById("title-login");
       let confirmElement=this.getById("confirm-pass");
       console.log(this.state.flagSign)

       if(this.state.flagSign === false){
        signupElement.style.display="block";
        confirmElement.style.display="block";
        loginElement.style.display="none";
        this.setState((state)=>{
            return{
                flagSign:!state.flagSign,
                flagLog:false
            }
            
        })
       }else{
            confirmElement.style.display="none";
            signupElement.style.display="none";
            loginElement.style.display="block";
            this.setState((state)=>{
                return{
                    flagSign:!state.flagSign
                }
                
            })
       }
    }
    showLogin=()=>{
        
        let signupElement=this.getById("title-signup");
       
        let loginElement=this.getById("title-login");
        let confirmElement=this.getById("confirm-pass");
        if(this.state.flagLog === false){
            confirmElement.style.display="none";
            signupElement.style.display="none";
            loginElement.style.display="block";
            this.setState((state)=>{
                return{
                    flagSign:!state.flagSign,
                   
                }
                
            })
        }else{
            alert('s');
        }
    }
    //    this.signupElement=Array.from(this.getElementByTag("button"));
    //    this.signupElement.forEach(element => {
            
    //         var btnSignup=element.querySelector('btn-signup');
    //         btnSignup.addEventListener('click',()=>{
    //             console.log(1);
    //         })
    //     });
    
   

        

    render() {
        return (
            <div id="home-right" class="col-xl-6 col-12">
                <div  id="box-login">
                   <h1 id="title-login" className="title">LOGIN</h1>
                   <h1 id="title-signup"className="title" >SIGN UP</h1>

                    <form id="form-login">
                        <div className="form-group">
                        <label>Email</label><br />
                        <input type="email" id="ip-email"></input>
                        </div>
                        <div className="form-group">
                        <label>Password</label><br />
                        <input type="password" id="ip-pass"></input>
                        </div>
                        <div className="form-group" id="confirm-pass">
                        <label>Confirm Password</label><br />
                        <input type="password" id="ip-pass"></input>
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={this.showLogin} >LOGIN</button>
                            
                            <button type="button" onClick={this.showSignUp} id="btn-signup" name="btn-sign">SIGN UP</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default HomeRight;