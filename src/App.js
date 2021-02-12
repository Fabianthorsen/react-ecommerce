import React from 'react';
import HomePage from './pages/Homepage/HomePage.component';
import ShopPage from './pages/Shop/ShopPage.component';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.component';
import SignInUp from './pages/SignInUp/SignInUp.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
