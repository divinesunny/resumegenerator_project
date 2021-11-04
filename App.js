import React,{useState}  from "react";
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom'
import LoginRoutes from "./Component/LoginRoutes/LoginRoutes";
import MainApp from "./Component/MainApp/MainApp";

function App() {
 
  return (
    <div className="App">
        <Router>
          <Route component={LoginRoutes} path='/'></Route>
          <Route component={MainApp} path='/resume'></Route>
        </Router>
    </div>
  );
}

export default App;
