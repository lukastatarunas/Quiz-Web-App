import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLogin } from '../../redux/actions'

const mapStateToProps = state => {
  return {
    username: state.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUsernameChange: event => dispatch(setLogin(event.target.value))
  }
}

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: ''
    }
  }

  onPasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  onSubmitSignIn = () => {
    fetch('https://localhost:44351/api/users')
      .then(response => response.json())
      .then(data => {
        data.forEach(element => {
          if (this.props.username === element.username && this.state.password === element.password && this.props.username !== `` && this.state.password !== ``) {
            this.props.onRouteChange(`home`)
          }
        })
      })
  }

  render() {
    let { onUsernameChange, onRouteChange } = this.props
    return (
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign in' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='username'>Username</label>
                <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white' type='text' name='username' id='username' onChange={ onUsernameChange }/>
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                <input className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white' type='password' name='password' id='password' onChange={ this.onPasswordChange }/>
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={ this.onSubmitSignIn }
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Sign in'
              />
            </div>
            <div className='lh-copy mt3'>
              <p  onClick={ () => onRouteChange(`register`) } className='f6 link dim black db pointer'>Register</p>
            </div>
          </div>
        </main>
      </article>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)