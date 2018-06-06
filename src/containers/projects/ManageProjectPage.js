import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import ProjectForm from '../../components/projects/ProjectForm'
import * as ProjectActionTypes from '../../actions/projectActions'
import toastr from 'toastr'
import {projectsFormattedForDropdown} from '../../selectors/selectors'

export class ManageProjectPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: Object.assign({}, this.props.project),
      errors: {},
      isSaving: false
    }
    this.onUpdateProjectState = this.onUpdateProjectState.bind(this)
    this.onSaveCourse = this.onSaveCourse.bind(this)
    this.redirect = this.redirect.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.project.id !== newProps.project.id) {
      this.setState({project: Object.assign({}, newProps.project)})
    }
  }

  isProjectFormValid() {
    let isValid = true
    let errors = {}

    if (this.state.project.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.'
      isValid = false
    }

    this.setState({errors})
    return isValid
  }

  onUpdateProjectState(event) {
    const field = event.target.name
    let project = this.state.project
    project[field] = event.target.value
    return this.setState({project})
  }

  onSaveCourse(event) {
    event.preventDefault()

    if (!this.isProjectFormValid()) {
      return
    }

    this.setState({isSaving: true})
    this.props.saveProject(this.state.project)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error)
        this.setState({isSaving: false})
      })
  }

  redirect() {
    this.setState({isSaving: false})
    toastr.success('Project saved')
    this.context.router.push('/projects')
  }

  render() {
    return (
      <ProjectForm
        allProjects={this.props.projects}
        onChange={this.onUpdateProjectState}
        onSave={this.onSaveCourse}
        project={this.state.project}
        errors={this.state.errors}
        isSaving={this.state.isSaving}
      />
    )
  }
}

ManageProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  saveProject: PropTypes.func.isRequired
}

ManageProjectPage.contextTypes = {
  router: PropTypes.object
}

const getProjectById = (projects, id) => {
  const project = projects.filter(project => project.id === id)
  if (project.length) {
    return project[0]
  }
  return null
}

const mapStateToProps = (state, ownProps) => {
  const projectId = ownProps.params.id
  let project = {
    id: '',
    title: '',
    downloadLinks: [{
      name: '',
      url: ''
    }],
    category: ''
  }

  if (projectId && state.projects.length > 0) {
    project = getProjectById(state.projects, projectId)
  }

  return {
    project,
    projects: projectsFormattedForDropdown(state.projects)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveProject: (project) => dispatch(ProjectActionTypes.saveProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage)
