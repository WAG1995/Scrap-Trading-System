import axios from "axios";


const SCRAP_LIST_URL = "http://localhost:9090/api/admin/getAllScrapPost";
const USER_LIST_URL = "http://localhost:9090/api/admin/getAllUsers";
const DELETE_SCRAP_URL = "http://localhost:9090/api/admin/deletePost";
const REPORT_LIST_URL = "http://localhost:9090/api/admin/getAllReport";
const SCRAP_BY_ID_URL = "http://localhost:9090/api/admin/getScrapPostById";
const DELETE_USER_URL = "http://localhost:9090/api/admin/deleteUser";
const FEEDBACK_LIST_URL = "http://localhost:9090/api/admin/getAllFeedback";

class ScrapPostService {

    deleteScrapPost(id){
        return axios.delete(DELETE_SCRAP_URL+'/'+id);
    }

    getScrapPostById(id){
        return axios.get(SCRAP_BY_ID_URL+'/'+id);
    }

    getAllScrapPost(){
        return axios.get(SCRAP_LIST_URL);
    }

    getAllFeedback(){
        return axios.get(FEEDBACK_LIST_URL);
    }

    getAllUsers(){
        return axios.get(USER_LIST_URL);
    }
    getAllReport(){
        return axios.get(REPORT_LIST_URL);
    }

    deleteUser(id){
        return axios.delete(DELETE_USER_URL+'/'+id);
    }
}




export default new ScrapPostService()