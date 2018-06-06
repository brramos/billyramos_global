import React, {Component, PropTypes} from 'react'
import {Header} from '../components/common'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    const {
      isLoading,
      children
    } = this.props
    return (
      <div className={'main-container'}>
        <Header
          isLoading={isLoading}/>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App)
