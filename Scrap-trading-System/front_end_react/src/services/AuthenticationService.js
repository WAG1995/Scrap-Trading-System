import axios from 'axios'


const LOGIN_URL = "http://localhost:9090/api/user/login";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    processLoginForm(username,password){
        console.log(username+" "+password)
        var us="?username="+username+"&password="+password;
        //return axios.post(`${API_URL}/api/user/login`,{username, password});
        return axios.post(LOGIN_URL+us);
            
    
    }

}

export default new AuthenticationService()