
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';

import SignIn from './Component/SignIn/SignIn';
import AddUserComponent from './Component/UserComponent/AddUserComponent';
import ListScrapPostComponent from './Component/UserComponent/ListScrapPostComponent';
import AddScrapPostComponent from './Component/UserComponent/AddScrapPostComponent';
import AddBidComponent from './Component/UserComponent/AddBidComponent';
import ReportComponent from './Component/UserComponent/ReportComponent';
import FeedbackComponent from './Component/UserComponent/FeedbackComponent';

import AdminHomeComponent from './Component/AdminComponent/AdminHomeComponent';
import AdminScrapPostComponent from './Component/AdminComponent/AdminScrapPostComponent';
import AdminUserComponent from './Component/AdminComponent/AdminUserComponent';
import AdminReportComponent from './Component/AdminComponent/AdminReportComponent';
import AdminFeedbackComponent from './Component/AdminComponent/AdminFeedbackComponent';
import UserContext from './Session/Session';
import LogoutComponent from './Component/UserComponent/LogoutComponent';
import GetScrapPostByUserComponent from './Component/UserComponent/GetScrapPostByUserComponent';
import ViewAllBidsComponent from './Component/UserComponent/ViewAllBidsComponent';


function App() {
  const [value, setValue] = useState('')
  return (
    
    <div>
      <Router>
      
        <div className="container">
           <Switch>
           <UserContext.Provider value={{value,setValue}}>
           
              <Route path='/' exact component={SignIn}></Route>
              <Route path='/register' exact component={AddUserComponent}></Route>
              <Route path='/login' exact component={SignIn}></Route>
              <Route path='/logout' exact component={LogoutComponent}></Route>
              
              <Route path='/viewScrapPost'  component={ListScrapPostComponent}></Route>
              <Route path='/addScrapPost' component={AddScrapPostComponent}></Route>
              <Route path='/addBid/:id' component={AddBidComponent}></Route>
              <Route path='/viewBid/:id' component={ViewAllBidsComponent}></Route>
              <Route path='/myScrapPost' component={GetScrapPostByUserComponent}></Route>
              <Route path='/reportScrappost' component={ReportComponent}></Route>
              <Route path='/feedbackUser' component={FeedbackComponent}></Route>
              <Route path='/adminhome'  component={AdminHomeComponent}></Route>
              <Route path='/AdmingetAllScrappost'  component={AdminScrapPostComponent}></Route>
              <Route path='/AdmingetAllUsers'  component={AdminUserComponent}></Route>
              <Route path='/AdmingetAllReport'  component={AdminReportComponent}></Route>
              <Route path='/AdmingetAllFeedback'  component={AdminFeedbackComponent}></Route>
              
              
              </UserContext.Provider> 
           </Switch>
    </div>
    </Router>
    </div>
    
  );
}

export default App;
