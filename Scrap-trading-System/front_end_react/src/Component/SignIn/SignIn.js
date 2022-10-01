

import './SignIn.css';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../Session/Session';
//import Navbar from './../NavBar/Navbar';
//import GetUsers from './../AdminHome/GetUsers';



 




const SignIn=()=>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {value,setValue } = useContext(UserContext)
  const history = useHistory(); 
  

  const signinUser = props => {
   
    if (username.length === 0) {
      alert('please enter email')
    } else if (password.length === 0) {
      alert('please enter password')
    } else {
      
      const data = new FormData()


      data.append('username', username);
      data.append('password', password);

      
      const url = 'http://localhost:9090'

      // this.props.history.push({
      //   pathname: '/page',
      //     state: data // your data array of objects
      // })
    
      axios.post(url + '/api/user/login', data).then((response) => {

        const result = response.data
        // const json=JSON.parse(response);
        // { this.setState({user:json});
        // localStorage.setItem("loggedinuser",JSON.stringify(this.state.user));}
        
        if (result.status === 'success') {
          setValue(result)
          localStorage.setItem('username',result.data.username)
          alert('Login Succesfull')
          if (result.data.username === 'waman') {
           
           history.push({ pathname: '/adminhome', state: result })
           
          }
          else if (result.data.username === 'kaustubh') {
            history.push('/adminhome')
          }
          else {
            history.push('/viewScrapPost')
          }
        }
        else {
          alert('Login Filed, Email or password incorrect')
        }
      })

    }
  }

  
  

  return(
          <div id="loginform">
            
            <h2 id="headerTitle">Login</h2>
            <div>
                <div className="row">
                  <label>Username</label>
                  <input 
                      type="text" 
                      placeholder="Enter your username"
                      onChange={(event) => {
                        setUsername(event.target.value)
                      }}
                      
                  />
                </div> 
                <div className="row">
                  <label>Password</label>
                  <input  
                      type="password" 
                      placeholder="Enter your password"
                      onChange={(event) => {
                        setPassword(event.target.value)
                      }}
                                           
                  />
                </div> 
                <div id="button" className="row">
                  <button onClick={signinUser}>Login</button>
                </div>
                <Link className="row" to="/register">don't have an account</Link>
                
            </div>
          
          </div>
  )

}
export default SignIn


