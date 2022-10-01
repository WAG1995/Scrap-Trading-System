import React, { Component } from 'react'
import ScrapPostService from '../../services/ScrapPostService';

export default class GetScrapPostByUserComponent extends Component {
    constructor(props){
super(props)

this.state = {
    user:[],
    scrappost:[]
}

    }



    componentDidMount(){
        this.state.username=localStorage.getItem('username')
        ScrapPostService.getUserByUsername(this.state.username).then((res) => {
            this.setState({user: res.data});
        });
        
        // res. setHeader("Access-Control-Allow-Origin", "*");
        this.state.id=localStorage.getItem('userId')
        ScrapPostService.getScarpPostByUserId(this.state.id).then((resp) => {
            this.setState({scrappost: resp.data});
          
        });
    }
    deleteScrapPost(id){
        ScrapPostService.deleteScrapPost(id).then( res => {
            this.setState({scrappost: this.state.scrappost.filter(scrappost => scrappost.id!==id)});
        })
    }

    viewBid(id){
        localStorage.setItem('scrapId',id)
        console.log('scarppost id :'+ id)
        this.props.history.push(`/viewBid/${id}`);
    }

  render() {
    return (
      <div><h3> {this.state.user.fullname}      </h3>
   
 <div className="row">
 
<table className="table table-striped table-bordered" style={{ "width": "700px" }} >
                 {/* <thead>
                     <tr>  
                         <th>Uploading Date</th>
                            <th>city</th>
                         <th>weight</th>
                         <th>Material Type</th>
                        <th>Scrap Image</th>
                         <th>Action</th>
                     </tr>
                 </thead> */}

                 <tbody>
                 {
                         this.state.scrappost.map(
                             scrap =>
                             <tr key={scrap.id} >
                        <td>
                            <div class="card mb-3">
                                <img src={scrap.scrapImage} class="card-img-top" alt="Scrap Image" width={150} height={400} />
                                <div class="card-body">
                                    {/* <h5 class="card-title">{scrap.user.fullname}</h5> */}
                                    <p class="card-text">City : {scrap.city}<br></br>
                                        Scrap Weight : {scrap.weight}<br></br>
                                        Discription : {scrap.materialType}</p>
                                    <div ><button className="btn btn-primary align-right" onClick={() => this.viewBid(scrap.id)}>Get all Bids</button></div>
                                    <div ><button className="btn btn-primary"  onClick={ () => this.deleteScrapPost(scrap.id)}>Delete</button>
                                                    </div>
                                    <p class="card-text"><small class="text-muted">posted on - {scrap.uploadingDate}</small></p>
                                </div>
                            </div>
                            </td>
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


