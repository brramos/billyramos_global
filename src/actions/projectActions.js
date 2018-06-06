import {
  LOAD_PROJECTS_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  CREATE_PROJECT_SUCCESS
} from './actionTypes'
import projectApi from '../api/mockProjectApi'
import {ajaxCallError, beginAjaxCall} from './ajaxStatusActions'

export function loadProjectsSuccess(projects) {
  return {
    type: LOAD_PROJECTS_SUCCESS,
    projects
  }
}

export function updateProjectSuccess(project) {
  return {
    type: UPDATE_PROJECT_SUCCESS,
    project
  }
}

export function createProjectSuccess(project) {
  return {
    type: CREATE_PROJECT_SUCCESS,
    project
  }
}

export function loadProjects() {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return projectApi.getAllProjects()
      .then(projects => {
        dispatch(loadProjectsSuccess(projects))
      })
      .catch(error => {
        dispatch(ajaxCallError())
        throw(error)
      })
  }
}

export function saveProject(project) {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return projectApi.saveProject(project)
      .then(savedProject => {
        project.id ? dispatch(updateProjectSuccess(savedProject)) :
          dispatch(createProjectSuccess(savedProject))
      })
      .catch(error => {
        dispatch(ajaxCallError())
        throw(error)
      })
  }
}
