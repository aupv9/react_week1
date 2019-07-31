import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import { singup } from '../../redux/actions';
import {connect} from 'react-redux';
import Swal from 'sweetalert2'
import './style.scss';

class SignUp extends Component {

    state={
        isSignup:false,
        email:"",
        password:"",
        confirmPassword:"",
        isInputValid: true,
        errorMessage: ''
    }

    handleChange=(e)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    FormError=(isHidden,errorMessage) =>{
        if (isHidden) {return null;}
        return (
          <div className="form-warning" >
              {errorMessage}
          </div>
        )
      }
    
    handleInputValidation = event => {
        const { isInputValid, errorMessage } = this.validateInput(this.state.email);
        this.setState({
          isInputValid: isInputValid,
          errorMessage: errorMessage
        })
      }
     validateInput = (checkingText) => {
        const regexp =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexp.exec(checkingText) !== null) {
            return {
                isInputValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Email not valid (abc@vn.com)'
            };
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.todos.isSignup && this.state.isInputValid){
            Swal.fire({
                title: 'Sign up success ',
                animation: true,
                type: 'success',
                customClass: {
                  popup: 'animated tada'
                }
            
        })  
            this.setState({
                isSignup:true
            })
        }else{
            Swal.fire({
                    title: 'Sign up fail  ',
                    animation: true,
                    type: 'error',
                    customClass: {
                      popup: 'animated tada'
                    }
            })
        }
    }
    signup=()=>{
        if(!this.state.email || !this.state.password || !this.state.confirmPassword){
            Swal.fire({
                title: 'Email or Password is not null  ',
                animation: true,
                type: 'info',
                customClass: {
                  popup: 'animated tada'
                }
        })
        } else if(!this.state.isInputValid){
            Swal.fire({
                title: 'Email must valid',
                animation: true,
                type: 'info',
                customClass: {
                  popup: 'animated tada'
                }
            })
        }
        else if( this.state.password.length < 6){
            Swal.fire({
                title: 'Password must be length 6 characters or more',
                animation: true,
                type: 'info',
                customClass: {
                  popup: 'animated tada'
                }
        })
        }else if(this.state.password !== this.state.confirmPassword){
            Swal.fire({
                title: 'Password mismatched ',
                animation: true,
                type: 'info',
                customClass: {
                  popup: 'animated tada'
                }
        })
        }else{
            // const hassPass=hash.generate(this.state.password)
            // localStorage.setItem("pass",JSON.stringify(hassPass))
            this.props.onSignUp(this.state.email,this.state.password);

        }
    }
    render() {
        if(this.state.isSignup){
            return <Redirect to="/"></Redirect>
        }
        return (
            <div  id="box-sign">
            <h1 id="title-signup"className="title" >SIGN UP</h1>
             <form id="form-login" >
                 <div className="form-group">
                 <label>Email</label><br />
                 <input type="email" id="ip-email" onChange={this.handleChange} name="email" onBlur={this.handleInputValidation}></input>
                 {this.FormError(this.state.isInputValid,
                     this.state.errorMessage)}
                 </div>
                 <div className="form-group">
                 <label>Password</label><br />
                 <input type="password" id="ip-pass"name="password"onChange={this.handleChange}></input>
                 </div>
                 <div className="form-group" id="confirm-pass">
                 <label>Confirm Password</label><br />
                 <input type="password" id="ip-pass" name="confirmPassword" onChange={this.handleChange}></input>
                 </div>
                 <div className="form-group">
                 <button type="button" onClick={this.signup} id="btn-signup" name="btn-sign">SIGN UP</button>
                 <Link to="/home">
                    <button type="button" id="btn-login" name="btn-sign">LOGIN</button>
                 </Link>
                 </div>
             </form>
         </div>
        );
    }
}

    const mapStateToProps=(state)=>({
        todos:state.auth    
    });
    const mapDispatchToProps = dispatch => {
        return {
            onSignUp: (email, password) => { 
                dispatch(singup(email, password));
            }

        }
    };
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);