import React, { Component } from 'react';
import './style.scss';
import {Redirect} from 'react-router-dom';
import {connect} from'react-redux';
import {login} from'../../redux/actions'


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
        
    }
    state={
        flagSign:false,
        flagLog:true,
        logSucess:false,
        item:[],
        email:"",
        password:""
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

         console.log(1)
        }
    }
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
      this.props.onLogin(this.state.email,this.state.password)
           // this.loginFake();
            if(this.props.todos.success){
                this.setState({ logSucess:this.props.todos.success})
            }
            //console.log(this.props.todos);
           
        }
    }
    // loginFake(){
    //     Login("a2@vn.com","123456")
    // }
    componentWillMount(){
        if(this.props.todos.success){
            return (
                <Redirect to='/profile'></Redirect>
            )
        }else{
            alert("Sai tài khoản hoặc mật khẩu")
        }
    }
    render() {
      
        if(this.props.todos.success){
            return (
                <Redirect to='/profile'></Redirect>
            )
        }
        else{
            alert("Sai tài khoản hoặc mật khẩu")
        }
        return (
            <div id="home-right" className="col-xl-6 col-12">
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

    const mapStateToProps=(state)=>({
        todos:state.task    
    });
    const mapDispatchToProps = dispatch => {
        return {
            onLogin: (email, password) => { 
                dispatch(login(email, password));
            }
        }
    };
    

export default connect(mapStateToProps,mapDispatchToProps)(HomeRight);