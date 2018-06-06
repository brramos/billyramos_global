import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import * as projectActions from '../../actions/projectActions'
import ProjectList from "../../components/projects/ProjectList";
import {browserHistory} from 'react-router'

class ProjectsPage extends Component {
  constructor(props) {
    super(props)
    this.redirectToProjectPage = this.redirectToProjectPage.bind(this)
  }

  redirectToProjectPage() {
    browserHistory.push('manage_project')
  }

  render() {
    const {projects} = this.props
    return (
      <div>
        <h1>Projects</h1>
        <input
          type={'submit'}
          value={'Add Project'}
          className={'btn btn-primary'}
          onClick={this.redirectToProjectPage} />
        <ProjectList projects={projects}/>
      </div>
    )
  }
}

ProjectsPage.propTypes = {
  saveProject: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveProject: (project) => dispatch(projectActions.saveProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage)
