import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Navigation from './components/Navigation/Navigation'
import Register from './components/Register/Register'
import SignIn from './components/SignIn/SignIn'
import User from './components/User/User'
import Admin from './components/Admin/Admin'
import { connect } from 'react-redux'
import { setLogin } from './redux/actions'
import './App.css'

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: `signIn`,
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if (route === `signOut`) {
      this.setState({ isSignedIn: false })
    } 
    else if (route === `home`) {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    let { isSignedIn, route } = this.state
    let { username } = this.props
    return (
      <div className='App'>
        <Particles className='particles' particlesOptions={ particlesOptions } />
        <Navigation isSignedIn={ isSignedIn } onRouteChange={ this.onRouteChange } />
        { route === `home`
          ? 
            username === `admin` ?
            <Admin onRouteChange={ this.onRouteChange } />
            :
            <User onRouteChange={ this.onRouteChange } />
          : (
             route === `signIn`
             ? <SignIn onRouteChange={ this.onRouteChange } />
             : <Register onRouteChange={ this.onRouteChange } />
            )
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)