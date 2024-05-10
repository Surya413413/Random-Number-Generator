// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({num: newRandomNumber})
  }
  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="second-card">
          <h1 className="heading-random">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>

          <button
            className="button-element"
            type="button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="heading-random">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
