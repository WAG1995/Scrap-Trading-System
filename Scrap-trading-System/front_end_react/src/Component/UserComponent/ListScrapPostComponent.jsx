import React, { Component } from 'react';
import ScrapPostService from '../../services/ScrapPostService';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListScrapPostComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            scrappost: []
        }

        this.addScrapPost = this.addScrapPost.bind(this);
        // this.deleteScrapPost = this.deleteScrapPost.bind(this);
        this.addBid = this.addBid.bind(this);
        this.loginpage = this.loginpage.bind(this);
        this.giveFeedback = this.giveFeedback.bind(this);
        this.getScarpPostByUserId = this.getScarpPostByUserId.bind(this)
    }


    componentDidMount() {
        this.state.username = localStorage.getItem('username')
        ScrapPostService.getUserByUsername(this.state.username).then((res) => {
            this.setState({ user: res.data });
        });

        // res. setHeader("Access-Control-Allow-Origin", "*");
        ScrapPostService.getScrapPost().then((resp) => {
            this.setState({ scrappost: resp.data });

        });
    }

    loginpage() {

        this.props.history.push('/loginpage');
    }

    getScarpPostByUserId(id) {
        localStorage.setItem('userId', this.state.user.id)
        this.props.history.push('/myScrapPost');
    }

    addScrapPost() {
        this.props.history.push('/addScrapPost');
    }

    giveFeedback() {
        this.props.history.push('/feedbackUser');
    }

    addBid(id) {
        localStorage.setItem('scrapId', id)
        console.log('scarppost id :' + id)
        this.props.history.push(`/addBid/${id}`);
    }
    logout = (e) => {
        alert('You are logged out');
        this.props.history.push('/logout');
    }//<button className="btn btn-success" onClick={this.logout}>Get allFeedback</button><br></br>





    render() {
        return (
            <div><button className="btn btn-success" onClick={this.logout}>Log Out </button><br></br>
                <button className="btn btn-success align-right" onClick={this.getScarpPostByUserId}>myScrapPost</button><br></br>
                <h3>Welcome,  {this.state.user.fullname}</h3>
                <h2 className="text-center">Scrap Posts</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addScrapPost}>Add Scrap Post</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered " style={{ "width": "700px" }}>

                        <tbody>
                            {this.state.scrappost.map(
                                scrap =>
                                    <tr key={scrap.id} >
                                        <td>
                                            <div className="card mb-3">
                                                <img src={scrap.scrapImage} className="card-img-top" alt="Scrap Image" width={150} height={400} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{scrap.user.fullname}</h5>
                                                    <p className="card-text">City : {scrap.city}<br></br>
                                                        Scrap Weight : {scrap.weight}<br></br>
                                                        Discription : {scrap.materialType}</p>
                                                    <div ><button className="btn btn-primary align-right" onClick={() => this.addBid(scrap.id)}>Details</button></div>
                                                    <p className="card-text"><small className="text-muted">posted on - {scrap.uploadingDate}</small></p>
                                                </div>
                                            </div></td>
                                    </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="row">
                        <button className="btn btn-primary" onClick={this.giveFeedback}>Give Feedback</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListScrapPostComponent;



