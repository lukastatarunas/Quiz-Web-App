import React, { Component } from 'react'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      username: '',
      password: '',
      repeat: ''
    }
  }

  onNameChange = event => {
    this.setState({ name: event.target.value })
  }
  
  onSurnameChange = event => {
    this.setState({ surname: event.target.value })
  }
  
  onUsernameChange = event => {
    this.setState({ username: event.target.value })
  }
  
  onPasswordChange = event => {
    this.setState({ password: event.target.value })
  }
  
  onrRepeatChange = event => {
    this.setState({ repeat: event.target.value })
  }

  onSubmitRegister = () => {
    let { name, surname, username, password, repeat } = this.state
    if (name !== `` && surname !== `` && username !== `` && password !== `` && repeat !== `` && password === repeat) {
      fetch(`https://localhost:44351/api/users`, {
        method: `post`,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.state.name,
          surname: this.state.surname,
          username: this.state.username,
          password: this.state.password,
          repeat: this.state.repeat
        })
      })
      .then(response => response.json())
      .then(data => {
        this.props.onRouteChange(`signIn`)
      })
    }
    else if (password !== repeat) {
      alert(`Password and Repeat fields must match in order to register!`)
    }
  }

  render() {
    return (
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='register' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Register</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='name'>Name</label>
                <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='text' id='name' onChange={ this.onNameChange }/>
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='surname'>Surname</label>
                <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='text' id='surname' onChange={ this.onSurnameChange }/>
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='username'>Username</label>
                <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='text' id='username' onChange={ this.onUsernameChange }/>
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                <input className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password' id='password' onChange={ this.onPasswordChange }/>
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='repeat'>Repeat</label>
                <input className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password' id='repeat' onChange={ this.onrRepeatChange }/>
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={ this.onSubmitRegister }
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Register'
              />
            </div>
          </div>
        </main>
      </article>
    )
  }
}

export default Register