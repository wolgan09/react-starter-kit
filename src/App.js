import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './shared/Header/Header';

import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Men from './components/Shop/Men';
import HomeLiving from './components/Shop/HomeLiving';
import Offers from './components/Shop/Offers';
import Kids from './components/Shop/Kids';
import Women from './components/Shop/Women';

function App() {
  return (
    <div >
    <Header />
   
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/shop/men" exact component={Men}></Route>
      <Route path="/shop/women" exact component={Women}></Route>
      <Route path="/shop/kids" exact component={Kids}></Route>
      <Route path="/shop/offers" exact component={Offers}></Route>
      <Route path="/shop/home&living" exact component={HomeLiving}></Route>
    </Switch> 

    </div>   
  );
}

export default App;
