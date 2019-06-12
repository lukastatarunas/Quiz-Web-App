import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let { onClick, value } = this.props
    return (
      <div>
        <button onClick={ onClick } className='btn btn-outline-dark'>{ value }</button>
      </div>
    )
  }
}

export default Button