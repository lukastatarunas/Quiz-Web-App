import React, { Component } from 'react'
import Button from '../Button/Button'
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

class ViewResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isEmptyState: true,
        result: 0,
        showTestResults: false
    }
  }

  viewTest1Result = () => {
    fetch(`https://localhost:44351/api/test1result`)
      .then(response => response.json())
      .then(data => {
        data.forEach(users => {
          if (this.props.username === users.username) {
            this.setState({
              result: users.result,
              showTestResults: true
          })
        }
      })
    })
  }

  viewTest2Result = () => {
    fetch(`https://localhost:44351/api/test2result`)
      .then(response => response.json())
      .then(data => {
        data.forEach(users => {
          if (this.props.username === users.username) {
            this.setState({
              result: users.result,
              showTestResults: true
          })
        }
      })
    })
  }

  viewTest3Result = () => {
    fetch(`https://localhost:44351/api/test3result`)
      .then(response => response.json())
      .then(data => {
        data.forEach(users => {
          if (this.props.username === users.username) {
            this.setState({
              result: users.result,
              showTestResults: true
          })
        }
      })
    })
  }

  viewTest4Result = () => {
    fetch(`https://localhost:44351/api/test4result`)
      .then(response => response.json())
      .then(data => {
        data.forEach(users => {
          if (this.props.username === users.username) {
            this.setState({
              result: users.result,
              showTestResults: true
          })
        }
      })
    })
  }

  viewTest5Result = () => {
    fetch(`https://localhost:44351/api/test5result`)
      .then(response => response.json())
      .then(data => {
        data.forEach(users => {
          if (this.props.username === users.username) {
            this.setState({
              result: users.result,
              showTestResults: true
          })
        }
      })
    })
  }

  render() {
    let { isEmptyState, showTestResults, result } = this.state
    return (
      <div>
          { isEmptyState && <Button key={ 1 } value={ `View Test 1 Results` } onClick={ this.viewTest1Result } /> }
          { isEmptyState && <Button key={ 2 } value={ `View Test 2 Results` } onClick={ this.viewTest2Result } /> }
          { isEmptyState && <Button key={ 3 } value={ `View Test 3 Results` } onClick={ this.viewTest3Result } /> }
          { isEmptyState && <Button key={ 4 } value={ `View Test 4 Results` } onClick={ this.viewTest4Result } /> }
          { isEmptyState && <Button key={ 5 } value={ `View Test 5 Results` } onClick={ this.viewTest5Result } /> }
          { showTestResults ? <h1>Your result for this test is { result }%</h1> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewResults)