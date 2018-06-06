import React, {PropTypes} from 'react'
import {SelectInput, TextInput} from '../common'

const ProjectForm = ({project, allProjects, onSave, onChange, errors, isSaving}) => {
  return (
    <form>
      <h1>Manage Project</h1>
      <TextInput
        name={'title'}
        label={'Title'}
        value={project.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name={'projectId'}
        label={'Project'}
        value={project.projectId}
        defaultOption={'Select Project'}
        options={allProjects}
        onChange={onChange}
        error={errors.projectId}/>

      <TextInput
        name={'category'}
        label={'Category'}
        value={project.category}
        onChange={onChange}
        error={errors.category}/>

      <input
        type={'submit'}
        disabled={isSaving}
        value={isSaving ? 'Saving...' : 'Save'}
        className={'btn btn-primary'}
        onClick={onSave}/>
    </form>
  )
}

ProjectForm.propTypes = {
  project: PropTypes.object.isRequired,
  allProjects: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isSaving: PropTypes.bool,
  errors: PropTypes.object
}

export default ProjectForm

/*
{project.downloadLinks.map((link, index) =>
        <div key={index}>
          <TextInput
            name={`link_${index}`}
            label={'Link'}
            value={link.name}
            onChange={onChange}
            error={errors.link}/>
          <TextInput
            name={`url_${index}`}
            label={'Url'}
            value={link.url}
            onChange={onChange}
            error={errors.url}/>
        </div>
      )}
*
*
* */
