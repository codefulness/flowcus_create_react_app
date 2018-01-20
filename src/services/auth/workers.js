import reduxSagaFirebase from './reduxSagaFirebase'
import firebase from 'firebase'
import { call, put } from 'redux-saga/effects'
import actions from './actions'

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProiver = new firebase.auth.FacebookAuthProvider();

export const signInWithFacebook = function* () {
  try {
    const data = yield call(reduxSagaFirebase.auth.signInWithPopup, facebookProiver)
    yield put(actions.signInWithFacebook.success({ data }))
  } catch (error) {
    yield put(actions.signInWithFacebook.error(error))
  }
}

export const signInWithGoogle = function* () {
  try {
    const data = yield call(reduxSagaFirebase.auth.signInWithPopup, googleProvider)
    yield put(actions.signInWithGoogle.success({ data }))
  } catch (error) {
    yield put(actions.signInWithFacebook.error(error))
  }
}
