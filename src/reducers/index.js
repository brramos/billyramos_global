import {combineReducers} from 'redux'
import projects from './projectReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'

const rootReducer = combineReducers({
  projects,
  ajaxCallsInProgress
})

export default rootReducer
