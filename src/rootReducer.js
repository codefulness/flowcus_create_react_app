import { combineReducers } from 'redux'
import initialState from './initialState'
import authActions from './services/auth/actions'

const isSignInSuccessAction = type => (
  new Array(
    authActions.signInWithFacebook.success().type,
    authActions.signInWithGoogle.success().type,
  ).includes(type)
)
const isSignOutSuccessAction = type => authActions.signOut.success().type === type
const isSignOutError = type => (
  new Array(
    authActions.signInWithFacebook.error().type,
    authActions.signInWithGoogle.error().type,
    authActions.signIn.error().type,
    authActions.signOut.error().type,
  ).includes(type)
)
const handleAuthActions = (prevState = initialState.auth, action = {}) => {
  const { type } = action
  if (isSignInSuccessAction(type)) {
    return {
      ...prevState,
      user: {
        ...action.payload.user
      },
      error: initialState.auth.error
    }
  }
  if (isSignOutSuccessAction(type)) {
    return {
      ...prevState,
      user: initialState.auth.user,
      error:initialState.auth.error,
    }
  }
  if (isSignOutError(type)) {
    return {
      ...prevState,
      error: {
        code: action.payload.error.code,
        message: action.payload.error.message,
      }
    }
  }

  return prevState
}

export default combineReducers({
  auth: handleAuthActions,
  database: (prevState = {}) => prevState,
  view: (prevState = {}) => prevState,
})