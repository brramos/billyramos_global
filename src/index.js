/*eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import configureStore from './store/configureStore'
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import {loadProjects} from './actions/projectActions'
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/toastr/build/toastr.min.css'

const store = configureStore()
store.dispatch(loadProjects())

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
