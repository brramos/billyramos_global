import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/App'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import ExamplesPage from './components/examples/ExamplesPage'
import ProjectsPage from './containers/projects/ProjectsPage'
import ManageProjectPage from './containers/projects/ManageProjectPage'

export default (
  <Route path={'/'} component={App}>
    <IndexRoute component={HomePage} />
    <Route path={'about'} component={AboutPage} />
    <Route path={'examples'} component={ExamplesPage} />
    <Route path={'projects'} component={ProjectsPage} />
    <Route path={'manage_project'} component={ManageProjectPage} />
    <Route path={'manage_project/:id'} component={ManageProjectPage} />
  </Route>
)
