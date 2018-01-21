import { fork, call, all, takeLatest } from 'redux-saga/effects'
import actions from './actions'
import * as workers from './workers'

export default function* authService() {
  yield all([
    fork(workers.syncUserSaga),
    takeLatest(actions.signInWithFacebook.request().type, workers.signInWithFacebook),
    takeLatest(actions.signInWithGoogle.request().type, workers.signInWithGoogle),
    takeLatest(actions.signOut.request().type, workers.signOut),
  ])
}
