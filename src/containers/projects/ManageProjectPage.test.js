import React from 'react'
import expect from 'expect'
import {mount, shallow} from 'enzyme'
import {ManageProjectPage} from './ManageProjectPage'

describe('Manage Project Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      projects: [],
      project: {
        id: '',
        title: '',
        downloadLinks: [{
          name: '',
          url: ''
        }],
        category: ''
      },
      saveProject: () => Promise.resolve()
    }
    const manageProjectPage = mount(<ManageProjectPage {...props} />)
    const saveButton = manageProjectPage.find('input').last()
    expect(saveButton.prop('type')).toBe('submit')
    saveButton.simulate('click')
    expect(manageProjectPage.state().errors.title).toBe('Title must be at least 5 characters.')
  })
})
