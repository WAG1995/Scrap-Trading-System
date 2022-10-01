import React, { Component } from 'react'
import AdminService from '../../services/AdminService';

export default class AdminfeedbackComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
          feedback: []
      }
    }

    componentDidMount(){
      // res. setHeader("Access-Control-Allow-Origin", "*");
      AdminService.getAllFeedback().then((res) => {
          this.setState({feedback: res.data});
      });
  }
  logout=(e) =>{alert('You are logged out');
    this.props.history.push('/logout');
  }//<button className="btn btn-success" onClick={this.logout}>Get allFeedback</button><br></br>

// add delete feedback function
    
  render() {
    return (
      <div><button className="btn btn-success" onClick={this.logout}>Log Out </button><br></br>
             <h2 className="text-center">feedbacks</h2>
              
             <div className="row">
             <table className="table table-striped table-bordered">
                 <thead>
                     <tr>
                         <th>User Id</th>
                         <th>Username</th>
                         <th>Fullname of User</th>
                         <th>Description</th>
                         
                     </tr>
                 </thead>

                 <tbody>
                     {
                         this.state.feedback.map(
                             feedback =>
                             
                             <tr key={feedback.id}>
                                 <td >{feedback.user.id}</td>
                                 <td>{feedback.user.username}</td>
                                 <td>{feedback.user.fullname}</td>
                                 <td>{feedback.description}</td>

                             </tr>
                         )
                     }
                 </tbody>
                 </table>    
 
             </div>  
            </div>

    )
  }
}
