import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  applyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  accelerateSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Speedometer</h1>
        <img
          alt="speed images"
          className="img-size"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h2>Speed is {speed}mph</h2>
        <p>Min limit is 0mph.Max limit is 200mph</p>
        <div className="btn-container">
          <button
            type="button"
            onClick={this.accelerateSpeed}
            className="btn-accelerate"
          >
            Accelerate
          </button>
          <button type="button" onClick={this.applyBrake} className="btn-brake">
            Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
