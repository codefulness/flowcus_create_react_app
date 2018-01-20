import { all, takeLatest } from 'redux-saga/effects'
import actions from './actions'
import * as workers from './workers'

export default function* authService() {
  yield all([
    takeLatest(actions.signInWithFacebook.request().type, workers.signInWithFacebook),
    takeLatest(actions.signInWithGoogle.request().type, workers.signInWithGoogle),
  ])
}
