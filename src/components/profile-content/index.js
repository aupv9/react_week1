import React, { Component } from 'react';
import './style.scss';



class Profile_Content extends Component {
    render() {
        return (
            <div id="content" className="row">
                <div id="box-content">
                    <i class="far fa-user-circle" id="icon"></i>
                    <form id="form-main">
                        <div className="row form-group">
                            <div className="col-xs-6 div-input ">
                                 <label>Name</label><br></br>
                                 <input></input>
                            </div>
                            <div className="col-xs-6 div-input">
                            <label>Name</label><br></br>
                                 <input></input>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-xs-6 div-input">
                                 <label>Name</label><br></br>
                                 <input></input>
                            </div>
                            <div className="col-xs-6 div-input">
                            <label>Name</label><br></br>
                                 <input></input>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-xs-6 div-input">
                                 <label>Name</label><br></br>
                                 <input></input>
                            </div>
                            <div className="col-xs-6 div-input">
                            <label>Name</label><br></br>
                                 <input></input>
                            </div>
                        </div>
                        <div className="row button">
                            <div className="button-right">
                            <button>Update</button>
                            </div>
                             
                         </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default Profile_Content;