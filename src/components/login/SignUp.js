import React, {Component} from 'react'
import {Link} from 'react-router'
import {auth} from '../../firebase'

export const SignUpPage = () =>
  <div>
    <h1>SignUp</h1>
    <SignUpForm/>
  </div>

export class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    const {
      username,
      email,
      password
    } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          error: null
        });
      })
      .catch(error => {
        this.setState({error});
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      error
    } = this.state;

    const isInvalid =
      password !== confirmPassword ||
      password === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState({username: event.target.value})}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState({email: event.target.value})}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState({password: event.target.value})}
          type="password"
          placeholder="Password"
        />
        <input
          value={confirmPassword}
          onChange={event => this.setState({confirmPassword: event.target.value})}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={'/sign-up'}>Sign Up</Link>
  </p>
