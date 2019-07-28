import React, { Component } from 'react';
import './style.scss';
import {connect} from'react-redux';
import {update} from'../../redux/actions'

class Profile_Content extends Component {


    updateInfo = () =>{
        
    }   
    render() {
        return (
            <div id="content" className="row">
                <div id="box-content">
                    <i className="far fa-user-circle" id="icon"></i>
                    <form id="form-main">
                        <div className="row form-group">
                            <div className="col-xs-6 div-input ">
                                 <label>Display Name</label><br></br>
                                 <input type="text" defaultValue="" ></input>
                            </div>
                            <div className="col-xs-6 div-input">
                            <label>Display Info</label><br></br>
                                 <input type="text" ></input>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-xs-6 div-input">
                                 <label>Email</label><br></br>
                                 <input type="Email"></input>
                            </div>
                            <div className="col-xs-6 div-input">
                            <label>Phone Number</label><br></br>
                                 <input type="text"></input>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-xs-6 div-input">
                                 <label>New Password</label><br></br>
                                 <input type="Password"></input>
                            </div>
                            <div className="col-xs-6 div-input">
                            <label>Confim Password</label><br></br>
                                 <input type="Password"></input>
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
        onUpdate:(infoUpdate)=>{
           dispatch(update(infoUpdate));
        }
        }
    };
export default connect(mapStateToProps,mapDispatchToProps)(Profile_Content);