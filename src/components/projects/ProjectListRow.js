import React, {PropTypes} from 'react'

const ProjectListRow = ({project}) => {
  return (
    <tr>
      <th>&nbsp;</th>
      <th><a href={`manage_project/${project.id}`}>{project.title}</a></th>
      <th>
        {project.downloadLinks.map((link, index) =>
          <div key={index}><a href={link.url}>{link.name}</a></div>
        )}
      </th>
      <th>{project.category}</th>
    </tr>
  )
}

ProjectListRow.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectListRow
