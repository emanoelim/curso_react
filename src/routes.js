import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Erro from './pages/Erro';
import Header from './components/Header';
import Filme from './components/Filme';


const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/filme/:id" component={Filme}/>
        <Route path="*" component={Erro}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
