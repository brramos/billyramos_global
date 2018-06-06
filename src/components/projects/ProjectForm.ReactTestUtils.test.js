import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ProjectForm from './ProjectForm'

const setup = (isSaving) => {
  const props = {
    project: {},
    isSaving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  }
  const renderer = TestUtils.createRenderer()
  renderer.render(<ProjectForm {...props}/>)
  const output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('ProjectForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const {output} = setup()
    expect(output.type).toBe('form')
    let [ h1] = output.props.children
    expect(h1.type).toBe('h1')
  })

  it('save button is labeled "Save" when not saving', () => {
    const {output} = setup(false)
    const submitButton = output.props.children[4]
    expect(submitButton.props.value).toBe('Save')
  });

  it('save button is labeled "Saving..." when not saving', () => {
    const {output} = setup(true)
    const submitButton = output.props.children[4]
    expect(submitButton.props.value).toBe('Saving...')
  });
})
