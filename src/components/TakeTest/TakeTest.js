import React, { Component } from 'react'
import Button from '../Button/Button'
import html5 from '../../api/html5'
import css3 from '../../api/css3'
import javascript from '../../api/javascript'
import sql from '../../api/sql'
import php from '../../api/php'

class TakeTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEmptyState: true,
      index: 0,
      selectedOption: 0,
      readyToSubmit: false,
      answersArray: [],
      result: 0
    }
    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this)
  }

  handleRadioButtonChange(event) {
    let { answersArray } = this.state
    this.setState({
      selectedOption: parseInt(event.target.value)
    })
    answersArray.push(event.target.value - 1)
    let count = 0
    for (let i = 0; i < 10; i++) {
      if (answersArray[i] === html5[i].correct) {
        ++count
      }
    }
    switch (count) {
      case 1:
        this.setState({
          result: 10
        })
        break
      case 2:
        this.setState({
          result: 20
        })
        break
      case 3:
        this.setState({
          result: 30
        })
        break
      case 4:
        this.setState({
          result: 40
        })
        break
      case 5:
        this.setState({
          result: 50
        })
        break
      case 6:
        this.setState({
          result: 60
        })
        break
      case 7:
        this.setState({
          result: 70
        })
        break
      case 8:
        this.setState({
          result: 80
        })
        break
      case 9:
        this.setState({
          result:90
        })
        break
      case 10:
        this.setState({
          result: 100
        })
        break
      default:
        this.setState({
          result: 0
        })
        break
    }
  }

  previous = () => {
    let { index } = this.state
    if (index > 0) {
      this.setState({
        ...this.state,
        isAddTripState: true,
        index: index - 1
      })
    }
  }

  next = () => {
    let { index } = this.state
    if (index === 9) {
      this.setState({
        readyToSubmit: true
      })
    }
    if (index < 9) {
      this.setState({
        ...this.state,
        isAddTripState: true,
        index: index + 1,
        selectedOption: 0
      })
    }
  }

  submit = () => {
    let { id } = this.props
    switch(id) {
      case 1:
          fetch(`https://localhost:44351/api/test1result`, {
            method: `post`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: this.props.username,
              result: this.state.result
            })
          })
          .then(response => response.json())
          .then(data => {
            
        })
        break
      case 2:
          fetch(`https://localhost:44351/api/test2result`, {
            method: `post`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: this.props.username,
              result: this.state.result
            })
          })
          .then(response => response.json())
          .then(data => {
            
        })
        break
      case 3:
          fetch(`https://localhost:44351/api/test3result`, {
            method: `post`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: this.props.username,
              result: this.state.result
            })
          })
          .then(response => response.json())
          .then(data => {
           
        })
        break
      case 4:
          fetch(`https://localhost:44351/api/test4result`, {
            method: `post`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: this.props.username,
              result: this.state.result
            })
          })
          .then(response => response.json())
          .then(data => {
            
        })
        break
      case 5:
          fetch(`https://localhost:44351/api/test5result`, {
            method: `post`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: this.props.username,
              result: this.state.result
            })
          })
          .then(response => response.json())
          .then(data => {
         
        })
        break
      default:
        break
    }
    alert(`Your result is successfully submitted in the database!`)
    this.props.onRouteChange(`signIn`)
  }

  render() {
    let { selectedOption, index, isEmptyState, previous, next, readyToSubmit, result } = this.state
    let { id } = this.props
    let optionRows = []
    let data = []
    switch(id) {
      case 1:
        data = html5
        break
      case 2:
        data = css3
        break
      case 3:
        data = javascript
        break
      case 4:
        data = sql
        break
      case 5:
        data = php
        break
      default:
        break
    }
    for (let i = 1; i <= 5; i++) {
      optionRows.push(<div key={ i }><label><input type='radio' onChange={ this.handleRadioButtonChange } value={ i } checked={ selectedOption === i } ></input><span className='btn btn-outline-dark'> { data[index].options[i - 1] } </span></label><br></br><br></br></div>)
    }
    return (
      <div className='ma4 mt0'>
        <h1>{ data[index].question }</h1>
        { optionRows }
        <p>{ index + 1 }/10</p>
        { isEmptyState && <Button className='previous' value='< Previous' onClick={ this.previous } />}
        { previous && <TakeTest /> }<br></br>
        { isEmptyState && <Button className='next' value='Next >' onClick={ this.next } />}
        { next && <TakeTest /> }<br></br>
        { readyToSubmit? <h1>Your test result is: { result } %</h1> : null }<br></br>
        { readyToSubmit? <Button className='submit' value='Submit' onClick={ this.submit } /> : null }<br></br>
      </div>
    )
  }
}

export default TakeTest