import React, { Component } from 'react'
import ScrapPostService from '../../services/ScrapPostService';

export default class ReportComponent extends Component {
    constructor(props) {
        super(props)
        
    this.state = {
      user :[],
        value: ''
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
      this.setState({value: event.target.value});
    }
  
    handleSubmit=(event)=> {
      alert('An Report was submitted: ' + this.state.value);
      event.preventDefault();
    }
    
    sendReport = (e) => {e.preventDefault();
      let report = {user: this.state.user,
        description: this.state.description,
                      
                };
                      console.log('user info='+JSON.stringify(report));

                      ScrapPostService.sendReport(report).then(res =>{
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
            <h3>  {this.state.user.fullname}</h3>
          <label>
           Desciption :
            <textarea value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" onClick={this.sendReport} />
        </form>
      )
  }
}
