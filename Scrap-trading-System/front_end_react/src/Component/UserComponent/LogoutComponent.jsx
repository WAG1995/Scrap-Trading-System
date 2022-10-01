import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';

class LogoutComponent extends Component {
   
    render() {
         
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                                  </div>
                                  <Redirect to="/login" />
            </>
        )
    }
}

export default LogoutComponent