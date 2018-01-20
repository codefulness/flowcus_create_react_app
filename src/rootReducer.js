import { combineReducers } from 'redux'

export default combineReducers({
  auth: (prevState = {}) => prevState,
  database: (prevState = {}) => prevState,
  view: (prevState = {}) => prevState,
})