import expect from 'expect'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import * as projectActions from '../actions/projectActions'

describe('Store', function() {
  it('Should handle creating projects', function() {
    // arrange
    const store = createStore(rootReducer, {projects: [], ajaxCallsInProgress: 0})
    const project = {
      title: "Clean Code"
    }

    // act
    const action = projectActions.createProjectSuccess(project)
    store.dispatch(action)

    // assert
    const actual = store.getState().projects[0]
    const expected = {
      title: "Clean Code"
    }

    expect(actual).toEqual(expected)
  })
})
