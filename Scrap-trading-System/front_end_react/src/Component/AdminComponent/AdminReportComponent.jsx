import React, { Component } from 'react'
import AdminService from '../../services/AdminService';

export default class AdminReportComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
          report: []
      }
    }

    componentDidMount(){
      // res. setHeader("Access-Control-Allow-Origin", "*");
      AdminService.getAllReport().then((res) => {
          this.setState({report: res.data});
      });
  }

  logout=(e) =>{
    alert('You are logged out');
    this.props.history.push('/logout');
  }//<button className="btn btn-success" onClick={this.logout}>Get allFeedback</button><br></br>
    
  render() {
    return (
      <div><button className="btn btn-success" onClick={this.logout}>Log Out </button><br></br>
             <h2 className="text-center">Reports</h2>
              
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
                         this.state.report.map(
                             report =>
                             
                             <tr key={report.id}>
                                 <td >{report.user.id}</td>
                                 <td>{report.user.username}</td>
                                 <td>{report.user.fullname}</td>
                                 <td>{report.description}</td>

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
