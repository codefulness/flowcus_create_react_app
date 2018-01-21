import reduxSagaFirebase from '../reduxSagaFirebase'
import firebase from 'firebase'
import { call, put, take } from 'redux-saga/effects'
import actions from './actions'


export function* projects() {
  const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'projects');
  let projects;
  snapshot.forEach(project => {
    projects = {
      ...projects,
      [project.id]: project.data()
    }
  });

  yield put(actions.projects.success(projects));
}
