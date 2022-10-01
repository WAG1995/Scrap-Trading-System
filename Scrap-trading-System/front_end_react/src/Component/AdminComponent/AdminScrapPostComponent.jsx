import React, { Component } from 'react'
import AdminService from '../../services/AdminService';
import ScrapPostService from '../../services/ScrapPostService';

export default class AdminScrapPostComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            scrappost: [],
            user:[]
        }

        this.deleteScrapPost = this.deleteScrapPost.bind(this)

    }
    componentDidMount(){
        // res. setHeader("Access-Control-Allow-Origin", "*");
        this.state.username=localStorage.getItem('username')
        ScrapPostService.getUserByUsername(this.state.username).then((res) => {
            this.setState({user: res.data});
        });
        // res. setHeader("Access-Control-Allow-Origin", "*");
        AdminService.getAllScrapPost().then((res) => {
            this.setState({scrappost: res.data});
        });
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
            <h3>  {this.state.user.fullname}</h3>
             <h2 className="text-center">Scrap Posts</h2>
             
             <div className="row">
                    <table className="table table-striped table-bordered " style={{ "width": "700px" }}>

                        <tbody>
                            {this.state.scrappost.map(
                                scrap =>
                                    <tr key={scrap.id} >
                                        <td>
                                            <div class="card mb-3">
                                                <img src={scrap.scrapImage} class="card-img-top" alt="Scrap Image" width={150} height={400} />
                                                <div class="card-body">
                                                    <h5 class="card-title">{scrap.user.fullname}</h5>
                                                    <p class="card-text">City : {scrap.city}<br></br>
                                                        Scrap Weight : {scrap.weight}<br></br>
                                                        Discription : {scrap.materialType}</p>
                                                    <div ></div><button className="btn btn-primary"  onClick={ () => this.deleteScrapPost(scrap.id)}>Delete</button>
                                                    </div>
                                                    <p class="card-text"><small class="text-muted">posted on - {scrap.uploadingDate}</small></p>
                                                </div>
                                            </td>
                                    </tr>
                            )}
                        </tbody>
                    </table>

                 </div>  
                 </div>          
        );
    }
  }
