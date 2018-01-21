import { fork, call, all, takeLatest } from 'redux-saga/effects'
import actions from './actions'
import * as workers from './workers'

export default function* databaseService() {
  yield all([
    takeLatest(actions.projects.request().type, workers.projects),
  ])
}
