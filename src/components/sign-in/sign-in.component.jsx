import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            name='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
          <CustomButton
            type='submit'
            value='Submit Form'
            onSubmit={this.handleSubmit}
          >
            Sign in
          </CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
export default SignIn
