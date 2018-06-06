import expect from 'expect'
import React from 'react'
import {mount, shallow} from 'enzyme'
import ProjectForm from './ProjectForm'

const setup = (isSaving) => {
  const props = {
    project: {},
    isSaving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  }
  return shallow(<ProjectForm {...props} />)
}

describe('ProjectForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false)
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.find('h1').text()).toEqual('Manage Project')
  })

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false)
    expect(wrapper.find('input').props().value).toBe('Save')
  });

  it('save button is labeled "Saving..." when not saving', () => {
    const wrapper = setup(true)
    expect(wrapper.find('input').props().value).toBe('Saving...')
  });
})
