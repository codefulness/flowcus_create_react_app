import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  SignWithFacebookButton,
  SignWithGoogleButton,
} from './components'
import AuthActions from './services/auth/actions'
// auth/account-exists-with-different-credential


class App extends Component {

  render() {
    const { signInWithFacebook, signInWithGoogle } = AuthActions
    const { dispatch } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
        <SignWithFacebookButton onClick={() => dispatch(signInWithFacebook.request())} />
        <SignWithGoogleButton onClick={() => dispatch(signInWithGoogle.request())} />
      </div>
    );
  }
}

export default connect()(App);
