import React, { Component } from 'react'
import ScrapPostService from '../../services/ScrapPostService';

export default class ViewAllBidsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            user:[],
            scrappost: [],
            bidDetails: []
        }
    }

    componentDidMount (){
        this.state.username=localStorage.getItem('username')
      ScrapPostService.getUserByUsername(this.state.username).then((res) => {
          this.setState({user: res.data});
      });


      this.state.id=localStorage.getItem('scrapId')
        ScrapPostService.getBidDetailsByScrapPost(this.state.id).then((resp) => {
            this.setState({bidDetails: resp.data});
            //console.log(JSON.stringify(this.state.bidDetails))
              //console.log(JSON.stringify(resp.data));
        });

    }
  render() {
    return (
        <>
      <div>{this.state.user.fullname}</div>
      <div className="row">
<table className="table table-striped table-bordered">
                 <thead>
                     <tr>  
                        
                        <th>User </th>
                        <th>Mobile No.</th>
                         <th>bid Amount</th>
                     </tr>
                 </thead>

                 <tbody>
                 {
                         this.state.bidDetails.map(
                             (bid) =>
                             <tr key={this.state.scrappost.id}>
                               <td>{bid.user.fullname}</td>
                               <td>{bid.user.contactNo}</td>
                                <td>{bid.bidAmt}</td>
                                 </tr>
                         )
                     }
                      </tbody>
                 </table>


                 </div>
                 </>
    )
  }
}
