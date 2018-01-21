import reduxSagaFirebase from './reduxSagaFirebase'
import firebase from 'firebase'
import { call, put, take } from 'redux-saga/effects'
import actions from './actions'

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProiver = new firebase.auth.FacebookAuthProvider();

export function* syncUserSaga(action) {
  const channel = yield call(reduxSagaFirebase.auth.channel);
  while (true) {
    const { error, user } = yield take(channel);
    if (!user) {
      continue
    }
    const authUser = user.toJSON()
    switch (authUser.providerData[0].providerId) {
      case 'google.com':
        yield put(actions.signInWithGoogle.success({ user: authUser }))
        break;
      case 'facebook.com':
        yield put(actions.signInWithFacebook.success({ user: authUser }))
        break;
      default:
        yield put(actions.signIn.error(new Error('Provider not found')))
    }
  }
}

export function* signInWithFacebook() {
  try {
    yield call(reduxSagaFirebase.auth.signInWithPopup, facebookProiver)
  } catch (error) {
    yield put(actions.signInWithFacebook.error(error))
  }
}

export function* signInWithGoogle() {
  try {
    yield call(reduxSagaFirebase.auth.signInWithPopup, googleProvider)
  } catch (error) {
    yield put(actions.signInWithFacebook.error(error))
  }
}

export function* signOut(action) {
  try {
    yield call(reduxSagaFirebase.auth.signOut)
    yield put(actions.signOut.success())
  } catch (error) {
    yield put(actions.signOut.error(error))
  }
}
