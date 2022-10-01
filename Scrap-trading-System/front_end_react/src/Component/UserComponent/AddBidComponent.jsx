import React, { Component } from 'react';
import ScrapPostService from '../../services/ScrapPostService';
//import { useHistory } from 'react-router-dom';


class AddBidComponent extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            user:[],
        scrappost: {},
            bidAmt:''
        }
        this.addBidhandler=this.addBidhandler.bind(this);
        this.report=this.report.bind(this)
    }

    componentDidMount (){
        this.state.username=localStorage.getItem('username')
      ScrapPostService.getUserByUsername(this.state.username).then((res) => {
          this.setState({user: res.data});
      });

       //const history = useHistory()
       this.state.id= localStorage.getItem('scrapId')
       ScrapPostService.getScrapPostById(this.state.id).then((resp) => {
        this.setState({scrappost: resp.data})

     // console.log(JSON.stringify(this.state.scrappost))
        //console.log(JSON.stringify(resp.data));
             
       });
    }


    report =(e)=>{
        this.props.history.push('/reportScrappost');
      }



      addBidhandler =(event) => {this.setState(
        {bidAmt:event.target.value} 

      )};


      
      addBid = (e) => {e.preventDefault();
        let bidDetails = {
            bidAmt: this.state.bidAmt,
            scrappost: this.state.scrappost,
            user: this.state.user,
            
    
                  };
                        //console.log('bid detials info ='+JSON.stringify(bidDetails));
  
                        ScrapPostService.addBid(bidDetails).then(res =>{
                          this.props.history.push('/viewScrapPost');
                        });
        }

        logout=(e) =>{
            alert('You are logged out');
            this.props.history.push('/logout');
          }//<button className="btn btn-success" onClick={this.logout}>Get allFeedback</button><br></br>


    render() {
        return (
            <div><button className="btn btn-success" onClick={this.logout}>Log Out </button><br></br>
            <h3>{this.state.user.fullname}</h3>
           
             <h2 className="text-center">Add Bid</h2>
             
             <div className="row">
             <table className="table table-striped table-bordered" style={{ "width": "700px" }}>
             <tbody>
                 <tr key={this.state.scrappost.id} >
                <td>
                <div className="card mb-3">
                    <img src={this.state.scrappost.scrapImage} className="card-img-top" alt="Scrap Image" width={150} height={400} />
                    <div className="card-body">
                        {/* <h5 class="card-title">{scrap.user.fullname}</h5> */}
                        <p className="card-text">City : {this.state.scrappost.city}<br></br>
                            Scrap Weight : {this.state.scrappost.weight}<br></br>
                            Discription : {this.state.scrappost.materialType}<br></br>
                            Enter Bid Amount: <input type='text' name='addbid' value={this.state.bidAmt} onChange={this.addBidhandler} placeholder='Enter Amount' />
                            </p>
                        
                        <p className="card-text"><small class="text-muted">posted on - {this.state.scrappost.uploadingDate}</small></p>
                        <div ><button className="btn btn-primary align-right" onClick={this.addBid}>Bid on ScrapPost</button></div>
                    </div>
                    <div ><button className="btn btn-primary align-right" onClick={this.report}>Report ScrapPost</button></div>
                </div>
                </td>
        </tr>
        </tbody>        

                 
                 </table>  



                 
             </div>  
            </div>
        );
    }
}

export default AddBidComponent;