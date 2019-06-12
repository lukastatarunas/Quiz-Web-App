import React, { Component } from 'react'
import Button from '../Button/Button'
import TakeTest from '../TakeTest/TakeTest'
import ViewResults from '../ViewResults/ViewResults'
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

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isEmptyState: true,
        viewResults: true,
        totalTests: 5
    }
  }

  html5Test = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true,
      key: 1,
      viewResults: false
    })
  }

  css3Test = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true,
      key: 2,
      viewResults: false
    })
  }

  javascriptTest = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true,
      key: 3,
      viewResults: false
    })
  }

  sqlTest = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true,
      key: 4,
      viewResults: false
    })
  }

  phpTest = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true,
      key: 5,
      viewResults: false
    })
  }

  render() {
    let { isEmptyState, viewResults, isAddTripState, key, totalTests } = this.state
    let { username, onRouteChange } = this.props
    const tests = []
    for (let index = 1; index <= totalTests; index++) {
      let testName
      switch(index) {
        case 1:
          testName = this.html5Test
          break
        case 2:
          testName = this.css3Test
          break
        case 3:
          testName = this.javascriptTest
          break
        case 4:
          testName = this.sqlTest
          break
        case 5:
          testName = this.phpTest
          break
        default:
          testName = this.html5Test
          break
      }
      tests.push(isEmptyState && <Button key={ index } value={ `Take Test ${ index }` } onClick={ testName } />)
    }
    return (
      <div>
              { tests }
              { isAddTripState && <TakeTest onRouteChange={ onRouteChange } username={ username } key={ key } id={ key } /> }<br></br>
              { viewResults ? <ViewResults /> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)