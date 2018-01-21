import React, { Component } from 'react';
import { connect,  } from 'react-redux';
import { bindActionCreators } from 'redux'
import './App.css';
import {
  SignWithFacebookButton,
  SignWithGoogleButton,
} from './components'
import AuthActions from './services/auth/actions'
import DatabaseActions from './services/database/actions'
import initialState from './initialState'
import _ from 'lodash'
import { map } from 'ramda'

const ProjectList = props => {
  const items = map(item => (<li key={item.key}>{item.name}</li>), props.projects)
  return (<ul >{items}</ul>)
}

class App extends Component {

  componentWillReceiveProps(nextProps) {
    const nextError = nextProps.error
    const error = this.props.error
    const intialError = initialState.auth.error
    if (!_.isEqual(nextError, intialError) && !_.isEqual(error, nextError)) {
      alert(nextError.message)
    }
  }
  render() {
    const {
      dispatch,
      user,
      signInWithFacebook,
      signInWithGoogle,
      signOut,
      error,
      getProjects,
      projects
    } = this.props
    const AuthButtons = (user === initialState.auth.user) ? [
      <SignWithFacebookButton key="fb" onClick={signInWithFacebook} />,
      <SignWithGoogleButton key="gl" onClick={signInWithGoogle} />
    ] : [
      <a key="so" href="#" onClick={signOut}>Sign out</a>,
      <br key="b" />,
      <a key="p" href="#" onClick={getProjects}>get projects</a>
    ]

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flowcus</h1>
          {AuthButtons}
        </header>
        <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
        <ProjectList projects={projects.items} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.auth.error,
  projects: state.database.projects,
})

const { signOut, signInWithFacebook, signInWithGoogle } = AuthActions
const { getProjects } = DatabaseActions
const mapDispatchToProps = dispatch => bindActionCreators({
  signInWithFacebook: signInWithFacebook.request,
  signInWithGoogle: signInWithGoogle.request,
  signOut: signOut.request,
  getProjects: getProjects.request
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
