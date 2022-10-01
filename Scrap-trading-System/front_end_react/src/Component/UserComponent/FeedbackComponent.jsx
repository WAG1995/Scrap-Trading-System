import React, { Component } from 'react'
import ScrapPostService from '../../services/ScrapPostService';

export default class FeedbackComponent extends Component {
    constructor(props) {
        super(props)
        
    this.state = {
user:[],
description:'',
       
      };
  
      this.handleChange = this.handleChange.bind(this);
      
    }

    componentDidMount(){
      // res. setHeader("Access-Control-Allow-Origin", "*");
      this.state.username=localStorage.getItem('username')
      ScrapPostService.getUserByUsername(this.state.username).then((res) => {
          this.setState({user: res.data});
      });}
  
    handleChange=(event)=> {
      this.setState({description: event.target.value});
    }
  
    handleSubmit=(event)=> {
      alert('An feedback was submitted: ' + this.state.description);
      event.preventDefault();
    }
    
    sendFeedback = (e) => {e.preventDefault();
      let feedback = {user: this.state.user,
        description: this.state.description,
                      
                };
                      console.log('user info='+JSON.stringify(feedback));
                      alert('An feedback was submitted');
                      ScrapPostService.sendFeedback(feedback).then(res =>{
                        this.props.history.push('/viewScrapPost');
                      });
                      
      }
      logout=(e) =>{
        alert('You are logged out');
        this.props.history.push('/logout');
      }//<button className="btn btn-success" onClick={this.logout}>Get allFeedback</button><br></br>

  render() {
    return (
        <form ><button className="btn btn-success" onClick={this.logout}>Log Out </button><br></br>
          <h3>{this.state.user.fullname}</h3>
          
          <label>
           Desciption :
            <textarea value={this.state.description} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" onClick={this.sendFeedback} />
        </form>
      )
  }
}
