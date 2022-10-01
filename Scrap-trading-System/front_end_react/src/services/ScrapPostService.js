import axios from "axios";


const SCRAP_LIST_URL = "http://localhost:9090/api/user/getAllScrapPost";
const ADD_SCRAP_URL = "http://localhost:9090/api/user/addScrapPost";
const DELETE_SCRAP_URL = "http://localhost:9090/api/user/deletePost";
const ADD_BID_URL = "http://localhost:9090/api/user/addBid";
const SCRAP_BY_ID_URL = "http://localhost:9090/api/user/getScrapPostById";
const ADD_USER_URL = "http://localhost:9090/api/user/addUser";
const SEND_REPORT_URL = "http://localhost:9090/api/user/sendReport";
const SEND_FEEDBACK_URL = "http://localhost:9090/api/user/sendFeedback";
const GET_USERbyUSERNAME_URL = "http://localhost:9090/api/user/findByUsername";
const SCRAP_BY_USER_ID_URL = "http://localhost:9090/api/user/getScrapPostByUserId";
const BIDS_BY_SCRAP_ID_URL = "http://localhost:9090/api/user/getBidDetailsByScrapId";


class ScrapPostService {

    getBidDetailsByScrapPost(id){
        return axios.get(BIDS_BY_SCRAP_ID_URL+'/'+id)
    }

    getScarpPostByUserId(id){
        return axios.get(SCRAP_BY_USER_ID_URL+'/'+id)
    }

    addUser(user){
        return axios.post(ADD_USER_URL,user);
    }

    getUserByUsername(username){
        return axios.get(GET_USERbyUSERNAME_URL+'/'+username)
    }
    sendReport(report){
        return axios.post(SEND_REPORT_URL,report);
    }

    sendFeedback(feedback){
        return axios.post(SEND_FEEDBACK_URL,feedback);
    }

    getScrapPost(){
        return axios.get(SCRAP_LIST_URL);
    }

    addScrapPost(scrappost){
        return axios.post(ADD_SCRAP_URL,scrappost);
    }

    deleteScrapPost(id){
        return axios.delete(DELETE_SCRAP_URL+'/'+id);
    }

    getScrapPostById(id){
        return axios.get(SCRAP_BY_ID_URL+'/'+id);
    }

    addBid(biddetails){
        return axios.post(ADD_BID_URL,biddetails);
    }

}

export default new ScrapPostService()