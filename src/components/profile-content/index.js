import React, { Component } from 'react';
import './style.scss';
import {connect} from'react-redux';
import {update,getProfile} from'../../redux/actions'
import Swal from 'sweetalert2';
import {Redirect} from 'react-router-dom'
class Profile_Content extends Component {


    componentWillReceiveProps(nextProps){
        const user=nextProps.todos;
        console.log(user)
        /// nếu get dữ liệu thành công sẽ set lại value và hiển thị thông tin 
        if(user.isGetProfile){
            this.setState({
                 display_name:user.data.data.display_name,
                display_info:user.data.data.display_info,
                phone:user.data.data.phone,
                avatar:user.data.data.avatar,
            })
        }
        if(user.isSetSuccess){
            console.log(user.data.data.data.avatar)
            this.setState({
                display_name:user.data.data.display_name,
               display_info:user.data.data.display_info,
               phone:user.data.data.phone,
               avatar:user.data.data.avatar,
           })
        }
    }
    // variable global
    state={
        email:"",
        password:"",
        display_name:"",
        display_info:"",
        phone:"",
        confirmPassword:"",
        isUpdate:false,
        file: "",
        avatar: ""
    }
    // phương thức set lại thông tin user
    updateInfo = () =>{
        const {display_name,display_info, phone,avatar}=this.state;
        // kiểm tra tính hợp lệ 
        if(!this.state.password || !this.state.display_name ||
            !this.state.display_info || !this.state.phone || !this.state.avatar){
            Swal.fire({
                title: 'Info is not null ',
                animation: true,
                type: 'info',
                customClass: {
                  popup: 'animated tada'
                }
        })}
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
            // dữ liệu vào hợp lệ thì tiến hành update 
            const user =JSON.parse( localStorage.getItem("user"));
            this.props.onUpdate({display_name,display_info, phone,avatar},user.data);   
            Swal.fire({
                    title: 'Update Sucess' ,
                    type:"success",
                    animation: true,
                    type: 'info',
                    customClass: {
                      popup: 'animated tada'
                    }
                })
        }
        
    }   
    //lấy dữ liệu nhập từ bàn phím gán vào state
    handleChange=(e)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    // method lấy ảnh từ máy 
    handleChangeFile=(e)=>{
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            avatar: reader.result
          });
        }
        reader.readAsDataURL(file)
    }
    componentWillMount(){
        if(localStorage.getItem("user")){
            const user =JSON.parse( localStorage.getItem("user"));
            console.log(user.data)
            this.props.onGetProfile(user.data)
            this.setState({
                email:user.email,
                password:user.password
            })
        }
    }
    render() {
        if(localStorage.getItem("user") === null){
            return <Redirect to="/"></Redirect>
        }
        return (
            <div id="content" className="row">
                <div id="box-content">
                   <i className="far fa-user-circle" className="icon">
                       <img className="icon" src={this.state.avatar}></img>
                       </i>
                    <label className="btn-bs-file btn btn-lg ">
                    <i className="fas fa-pencil-alt" id="icon-file"></i>
                         <input type="file" name="avatar" onChange={this.handleChangeFile}/>
                 </label>
                    <form id="form-main">
                        <div className="row form-group">
                            <div className="col-xs-6 div-input ">
                                 <label>Display Name</label><br></br>
                                 <input type="text" defaultValue={this.state.display_name} name="display_name"  onChange={this.handleChange}></input>
                            </div>
                            <div className="col-xs-6 div-input">
                            <label>Display Info</label><br></br>
                                 <input type="text" name="display_info" defaultValue={this.state.display_info}onChange={this.handleChange} ></input>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-xs-6 div-input">
                                 <label>Email</label><br></br>
                                 <input type="Email" disabled defaultValue={this.state.email} onChange={this.handleChange}></input>
                            </div>
                            <div className="col-xs-6 div-input">
                            <label>Phone Number</label><br></br>
                                 <input type="text" name="phone" defaultValue={this.state.phone}onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-xs-6 div-input">
                                 <label>New Password</label><br></br>
                                 <input type="Password" name="password" onChange={this.handleChange}></input>
                            </div>
                            <div className="col-xs-6 div-input">
                            <label>Confim Password</label><br></br>
                                 <input type="Password" name="confirmPassword" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="row button">
                            <div className="button-right">
                            <button type="button" onClick={this.updateInfo}>UPDATE PROFILE</button>
                            </div>
                         </div>
                    </form>
                </div>
            </div>
        );
    }
}
    const mapStateToProps=(state)=>({
        todos:state.auth    
    });
    const mapDispatchToProps = dispatch => {
        return {
        onGetProfile: token =>{
            dispatch(getProfile(token))
        },
        onUpdate:(infoUpdate,token)=>{
           dispatch(update(infoUpdate,token));
            }
        }
    };
    // connect react với store của redux 
export default connect(mapStateToProps,mapDispatchToProps)(Profile_Content);