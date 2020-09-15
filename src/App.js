import { Grid } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom'; 
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetail from './Component/UserDetail/UserDetail';
import NotFound from './Component/NotFound/NotFound'; 

function App() {
  return (
    <Grid container justify = "center">
       <Router>
          
         <Switch>
           <Route path="/home">
              <Home></Home>
           </Route>
           <Route path ="/:userId">
                <UserDetail></UserDetail>
           </Route>
           <Route exact path ='/'>
              <Home></Home>
           </Route>
           <Route path ="*">
              <NotFound></NotFound>
           </Route>

         </Switch>
       </Router>
     
       </Grid>
        
   
  );
}

export default App;
