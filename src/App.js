import React  from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './main-page';
import Recipe from './recipe';
import Recipes from './recipes'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import './App.css';



const App = () => {
  return(   
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/recipe/:id" component={Recipe}></Route>
          <Route path="/recipes" component={Recipes}></Route>
        </Switch>
        </BrowserRouter>
  )
}

export default App;
