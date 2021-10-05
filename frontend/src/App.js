import AddEmployee from "./components/AddEmployee";
import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";

import ListEmployee from "./components/ListEmployees";
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header";

function App() {
  return (
   
    <Router>
        <Route path='/' component={ListEmployee} exact/>
        <Route path='/add' component={AddEmployee}/>
        <Route path='/edit/:id' component={EditEmployee}/>

        </Router>
  );
}

export default App;
