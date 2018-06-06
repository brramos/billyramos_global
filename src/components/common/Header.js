import React, {PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import {LoadingDots} from "./LoadingDots"

export const Header = ({isLoading}) => (
  <nav>
    <IndexLink to={'/'} activeClassName={'active'}>
      Home
    </IndexLink>
    {' | '}
    <Link to={'/about'} activeClassName={'active'}>
      About
    </Link>
    {' | '}
    <Link to={'/examples'} activeClassName={'active'}>
      Examples
    </Link>
    {' | '}
    <Link to={'/projects'} activeClassName={'active'}>
      Projects
    </Link>
    {isLoading && <LoadingDots interval={100} dots={20} />}
  </nav>
)

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
