import React, {PropTypes} from 'react'
import ProjectListRow from './ProjectListRow'

const ProjectList = ({projects, deleteProject}) => {
  return (
    <table className={'table'}>
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Project</th>
        <th>Links</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>
      {projects.map(project =>
        <ProjectListRow key={project.id} project={project}/>
      )}
      </tbody>
    </table>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectList
