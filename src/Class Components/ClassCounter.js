import React, { Component } from 'react'

class ClassCounter extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        counter : 1,
      }
    }

    clickIncrement = () => {
        this.setState({
            counter : this.state.counter +1
        })
    }

  render() {
    return (
      <div>
        <button onClick={this.clickIncrement}> Counter {this.state.counter} </button>
      </div>
    )
  }
}

export default ClassCounter