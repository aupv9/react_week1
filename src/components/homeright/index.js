import React, { Component } from 'react';
import './style.scss';
import {Redirect} from 'react-router-dom';
import {connect} from'react-redux';
import {login} from'../../redux/actions'
import Swal from 'sweetalert2'
 import {Route} from 'react-router-dom'
import Login from '../login';
import SignUp from '../signup';
class HomeRight extends Component {

    componentWillReceiveProps(nextProps){
        if(nextProps.todos.success){
            this.setState({ logSucess:nextProps.todos.success})
        }else{
            Swal.fire({
                    title: 'Sai tài khoản hoặc mật khẩu ',
                    animation: true,
                    type: 'warning',
                    customClass: {
                      popup: 'animated tada'
                    }
            })
        }
        if(nextProps.todos.signupSuccess){
            console.log(nextProps.todos.signupSuccess)
            let signupElement=this.getById("title-signup");
            let loginElement=this.getById("title-login");
            let confirmElement=this.getById("confirm-pass");
            confirmElement.style.display="none";
            signupElement.style.display="none";
            loginElement.style.display="block";
            this.setState(()=>{
                return{
                    flaglog:!this.state.flagLog,
                    flagSign:!this.state.flagSign
                }
            })
            Swal.fire({
                title: 'Đăng ký thành công',
                animation: true,
                type: 'success',
                customClass: {
                  popup: 'animated tada'
                }
            
            })
        }else{
            Swal.fire({
                title: 'Đăng ký thất bại',
                animation: true,
                type: 'error',
                customClass: {
                  popup: 'animated tada'
                }
            
            })
        }
    }
    // method lấy element qua Id
    getById= (id)=>{
        return document.getElementById(id);
    }
    constructor(props, context) {
        super(props, context);
    }
    state={
        flagSign:false,
        flagLog:true,
        logSucess:false,
        email:"",
        password:"",
        confirmPassword:"",
        isInputValid: true,
        errorMessage: ''
    }

    // function thực thi onclick của button sign up
    showSignUp= ()=>{ 
       let signupElement=this.getById("title-signup");
       let loginElement=this.getById("title-login");
       let confirmElement=this.getById("confirm-pass");
       if(!this.state.flagSign && this.state.flagLog){ /// signup đang đóng và login đang mở thì ta cho nó hiện và ẩn đi login
        signupElement.style.display="block";
        confirmElement.style.display="block";
        loginElement.style.display="none";
        this.setState(()=>{
            return{
                flagSign:!this.state.flagSign, //true
                flagLog: !this.state.flagLog   //false
            }           
        })
       }else{ // signup đang mở và thực hiện việc signup
            const pass = {
                password:this.state.password,
                confirmPassword:this.state.confirmPassword
            };
            if (pass.password === "" || pass.password !== pass.confirmPassword) {
                console.log(pass)
                Swal.fire({
                    title: 'Mật khẩu phải nhập giống nhau',
                    type: 'warning',
                    animation: false,
                    customClass: {
                      popup: 'animated tada'
                    }
                  })
            } else {
                // make API call 
                //alert("yes")
                this.props.onSignup(this.state.email,this.state.password);
            }
        }
    }

    // method để set value cho state 
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
    
    //method kiểm tra giá trị email nhập vào 
    handleInputValidation = event => {
        const { isInputValid, errorMessage } = this.validateInput(this.state.email);
        this.setState({
          isInputValid: isInputValid,
          errorMessage: errorMessage
        })
      }

    /// method kiểm tra email có định dạng hợp lệ không 
     validateInput = (checkingText) => {
        const regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
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

    //method login
    showLogin=()=>{ 
        let signupElement=this.getById("title-signup");
        let loginElement=this.getById("title-login");
        let confirmElement=this.getById("confirm-pass");
        if(!this.state.flagLog && this.state.flagSign){
            confirmElement.style.display="none";
            signupElement.style.display="none";
            loginElement.style.display="block";
            this.setState(()=>{
                return{
                    flaglog:!this.state.flagLog,
                    flagSign:!this.state.flagSign
                }
            })
        }
       else{       
           if(this.state.email && this.state.password && this.state.isInputValid)
            this.props.onLogin(this.state.email,this.state.password)
           else 
             Swal.fire({
            title: 'Không được để trống tài khoản hay mật khẩu',
            animation: true,
            type: 'warning',
            customClass: {
              popup: 'animated tada'
            }
            })
        }   
    }
    
    render() {
        console.log(this.props.match)
      if(this.state.logSucess){
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Bạn đã đăng nhập thành công',
            showConfirmButton: false,
            timer: 1500
          })
          return <Redirect to="/profile"></Redirect>
         
      }
        return (
            <div id="home-right" className="col-xl-6 col-12">
                <Route exact path={`${this.props.match.url}/login`} component={Login}>
                </Route>
                <Route path="/sign-up" component={SignUp}>
                </Route>
            </div>
        );
    }
}

    const mapStateToProps=(state)=>({
        todos:state.auth    
    });
    const mapDispatchToProps = dispatch => {
        return {
            onLogin: (email, password) => { 
                dispatch(login(email, password));
            }

        }
    };
export default connect(mapStateToProps,mapDispatchToProps)(HomeRight);