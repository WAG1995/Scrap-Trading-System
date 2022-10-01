import React, { Component } from 'react'
import AdminService from '../../services/AdminService';

export default class AdminUserComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }

        this.deleteUser = this.deleteUser.bind(this)

    }
    componentDidMount(){
        
        // res. setHeader("Access-Control-Allow-Origin", "*");
        AdminService.getAllUsers().then((res) => {
            this.setState({users: res.data});
        });
    }
s
    deleteUser(id){
        AdminService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(users => users.id!==id)});
        })
    }
    deleteScrapPost(id){
        AdminService.deleteScrapPost(id).then( res => {
            this.setState({scrappost: this.state.scrappost.filter(scrappost => scrappost.id!==id)});
        })
    }
    logout=(e) =>{
        alert('You are logged out');
        this.props.history.push('/logout');
      }//<button className="btn btn-success" onClick={this.logout}>Get allFeedback</button><br></br>

  render() {
    
        return (
            <div><button className="btn btn-success" onClick={this.logout}>Log Out </button><br></br>
             <h2 className="text-center">All Users</h2>
          
             <div className="row">
             <table className="table table-striped table-bordered">
             
    

                 <tbody>
                     {
                        this.state.users.map(
                            user =>
                        <tr key={user.id} >
                        <td>
                            <div class="card mb-3">
                                
                                <div class="card-body">
                                    
                                    <p class="card-text">user id : {user.id}<br></br>
                                    full name : {user.fullname}<br></br>
                                        email : {user.email}<br></br>
                                        contact No. : {user.contactNo}<br></br>
                                        address : {user.address}<br></br>
                                        username: {user.username}  </p>
                                    <div ><button className="btn btn-primary"  onClick={ () => this.deleteUser(user.id)}>Delete User</button></div>
                                    
                                </div>
                            </div></td>
                    </tr>
                        
                             
                          
                         )
                     }
                 </tbody>
                 </table>    
                 </div>  
            </div>
        );
    }
}
