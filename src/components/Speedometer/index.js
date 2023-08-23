import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  onDecrement = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">SPEEDOMETER</h1>

          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer"
            alt="speedometer"
          />

          <h2 className="speed">Speed is {count}mph</h2>

          <p className="description">Min Limit is 0mph, Max limit is 200mph</p>

          <div>
            <button
              className="accButton"
              type="button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              className="brakeButton"
              type="button"
              onClick={this.onDecrement}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
