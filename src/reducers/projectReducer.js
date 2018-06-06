import {
  LOAD_PROJECTS_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  CREATE_PROJECT_SUCCESS
} from '../actions/actionTypes'

export default function projectReducer(state = [], action) {
  switch(action.type) {
    case LOAD_PROJECTS_SUCCESS:
      return action.projects
    case CREATE_PROJECT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.project)
      ]
    case UPDATE_PROJECT_SUCCESS:
      return [
        ...state.filter(project => project.id !== action.project.id),
        Object.assign({}, action.project)
      ]
    default:
      return state
  }
}
