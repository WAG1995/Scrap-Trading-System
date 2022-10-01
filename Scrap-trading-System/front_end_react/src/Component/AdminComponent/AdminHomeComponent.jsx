import React, { Component } from 'react'
import ScrapPostService from '../../services/ScrapPostService';

export default class AdminHomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
        user : [],
           
              }
    }

    componentDidMount(){
      // res. setHeader("Access-Control-Allow-Origin", "*");
      this.state.username=localStorage.getItem('username')
      ScrapPostService.getUserByUsername(this.state.username).then((res) => {
          this.setState({user: res.data});
      });}

    report=(e) =>{
        this.props.history.push('/AdmingetAllReport');
      }
      feedback=(e) =>{
        this.props.history.push('/AdmingetAllFeedback');
      }
      allScrapPost=(e) =>{
        this.props.history.push('/AdmingetAllScrappost');
      }
      allUsers=(e) =>{
        this.props.history.push('/AdmingetAllUsers');
      }

      logout=(e) =>{
        alert('You are logged out');
        this.props.history.push('/logout');
      }//<button className="btn btn-success" onClick={this.logout}>Get allFeedback</button><br></br>
      
      
  render=(e) => {
    return (
      <div><button className="btn btn-success" onClick={this.logout}>Log Out </button><br></br>
       
      
      <h3>Welcome, Admin Mr {this.state.user.fullname}</h3>
          <button className="btn btn-success" onClick={this.allUsers}>Get User</button><br></br>
          <button className="btn btn-success" onClick={this.allScrapPost}>Get all  ScrapPost</button><br></br>
          
          <button className="btn btn-success" onClick={this.report}>Get all Report </button><br></br>
          <button className="btn btn-success" onClick={this.feedback}>Get all Feedback</button><br></br>
 

      </div>
    )
  }
} 
