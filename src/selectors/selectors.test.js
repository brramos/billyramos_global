import expect from 'expect'
import {projectsFormattedForDropdown} from './selectors'

describe('Project Selectors', () => {
  describe('projectsFormattedForDropdown', () => {
    it('should return project data formatted for use in a dropdown', () => {
      const projects = [
        {id: 'foo', title: 'Foo title'},
        {id: 'bar', title: 'Bar title'}
      ]

      const expected = [
        {value: 'foo', text: 'Foo title'},
        {value: 'bar', text: 'Bar title'}
      ]

      expect(projectsFormattedForDropdown(projects)).toEqual(expected)
    })
  })
})
