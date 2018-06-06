import expect from 'expect'
import projectReducer from './projectReducer'
import * as actions from '../actions/projectActions'

describe('Project Reducer', () => {
  it('should add project when passed CREATE_PROJECT_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ]

    const newProject = {title: 'C'}

    const action = actions.createProjectSuccess(newProject)

    //act
    const newState = projectReducer(initialState, action)

    //assert
    expect(newState.length).toEqual(3)
    expect(newState[0].title).toEqual('A')
    expect(newState[1].title).toEqual('B')
    expect(newState[2].title).toEqual('C')
  })

  it('should update project when passed UPDATE_PROJECT_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ]

    const project = {id: 'B', title: 'New Title'}
    const action = actions.updateProjectSuccess(project)

    // act
    const newState = projectReducer(initialState, action)
    const updatedProject = newState.find(a => a.id === project.id)
    const untouchedProject = newState.find(a => a.id === 'A')

    // assert
    expect(updatedProject.title).toEqual('New Title')
    expect(untouchedProject.title).toEqual('A')
    expect(newState.length).toEqual(3)
  })
})
