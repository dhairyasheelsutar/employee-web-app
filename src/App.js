import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './apps/Login/Login';
import Dashboard from './apps/Dashboard/Dashboard';
import {Route} from "react-router";
import Users from './apps/Users/Users/Users';
import Register from './apps/Users/Register/Register';
import Attendance from './apps/Attendance/Attendance';
import Help from './apps/Help/help';

function App() {
  return (
      <BrowserRouter>
          <div className="bg-grey">
              <Route exact path="/" component={Login}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/workers" component={Users}/>
              <Route exact path="/workers/add" component={Register}/>
              <Route exact path="/attendance" component={Attendance}/>
              <Route exact path="/help" component={Help}/>
          </div>
      </BrowserRouter>


  );
}

export default App;
