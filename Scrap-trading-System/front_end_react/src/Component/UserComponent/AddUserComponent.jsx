import React, { Component } from 'react'
import ScrapPostService from '../../services/ScrapPostService';

export default class AddUserComponent extends Component {
        constructor(props){
            super(props)
    
            this.state = {
                fullname:'',
                email:'',
                contactNo:'',
                address:'',
                username:'',
                password:''
            }
    
            this.changeFullnameHandler = this.changeFullnameHandler.bind(this);
            this.changeEmailHandler = this.changeEmailHandler.bind(this);
            this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
            this.changeAddressHandler = this.changeAddressHandler.bind(this);
            this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
            this.changepasswordHandler = this.changepasswordHandler.bind(this);
            this.addUser = this.addUser.bind(this);
            this.cancelReg = this.cancelReg.bind(this);
    
        }
    
        changeFullnameHandler =(event) => {this.setState(
          {fullname:event.target.value} 
        )};
    
        changeEmailHandler =(event) => {this.setState(
            {email:event.target.value} 
          )};
    
          changeContactNoHandler =(event) => {this.setState(
            {contactNo:event.target.value} 
          )};
    
          changeAddressHandler =(event) => {this.setState(
            {address:event.target.value} 
          )};
    
          changeUsernameHandler =(event) => {this.setState(
            {username:event.target.value} 
          )};

          changepasswordHandler =(event) => {this.setState(
            {password:event.target.value} 
          )};
    
          addUser = (e) => {e.preventDefault();
          let user = {fullname: this.state.fullname,
                          email: this.state.email,
                          contactNo: this.state.contactNo,
                          address: this.state.address,
                          username: this.state.username,
                        password:this.state.password
                    };
                          console.log('user info='+JSON.stringify(user));
    
                          ScrapPostService.addUser(user).then(res =>{
                            this.props.history.push('/login');
                          });
          }
    
          cancelReg(){
            this.props.history.push('/login');
          }
    
          
    
    
        render() {
            return (
                <div>
                  <div className="container">
                      <div className="row">
                          <div className="card col-md-6 offset-md-3 offset-md-3">
                              <h2 className="text-center">Registration</h2>
                              
                              <div className="card-body">
                                  <form>
                                      <div className="form-group">
                                          <label>FullName</label>
                                          <input placeholder='fullname' name='fullname' className='form-control' value={this.state.fullname} onChange={this.changeFullnameHandler} required></input>
                                          <label>Email</label>
                                          <input placeholder='email' name='email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler}></input>
                                          <label>Contact No.</label>
                                          <input placeholder='contactNo' name='contactNo' className='form-control' value={this.state.contactNo} onChange={this.changeContactNoHandler}></input>
                                          <label>Address</label>
                                          <input placeholder='address' name='address' className='form-control' value={this.state.address} onChange={this.changeAddressHandler}></input>
                                          <label>Username</label>
                                          <input placeholder='username' name='username' className='form-control' value={this.state.username} onChange={this.changeUsernameHandler}></input>
                                          <label>Password</label>
                                          <input placeholder='password' name='password' className='form-control' value={this.state.password} onChange={this.changepasswordHandler}></input>
                                          <button className="btn btn-success" onClick={this.addUser}>Submit</button>
                                          <button className="btn btn-danger" onClick={this.cancelReg} style={{marginLeft : "10px"}}>Cancel</button>
                                      </div>
                                  </form> 
                              </div>
                        </div> 
                      </div>
                  </div>
                    
                </div>
            );
        }
    }
    
    
