import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produto from './pages/Produto';
import Erro from './pages/Erro';
import Header from './components/Header';


const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/sobre" component={Sobre}/>
        <Route path="/produto/:id" component={Produto}></Route>
        <Route path="*" component={Erro}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
