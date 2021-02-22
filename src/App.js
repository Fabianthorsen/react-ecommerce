import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/Homepage/HomePage.component';
import ShopPage from './pages/Shop/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInUp from './pages/SignInUp/SignInUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      /* If user logs out then set state to NULL */
      setCurrentUser(userAuth);
    });
  }
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
