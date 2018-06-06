export const projectsFormattedForDropdown = (projects) => {
  return projects.map(project => {
    return {
      value: project.id,
      text: project.title
    }
  })
}
