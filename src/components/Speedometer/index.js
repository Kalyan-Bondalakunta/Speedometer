import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerateBtn = () => {
    let {speed} = this.state

    if (speed >= 200) {
      speed = 200
      this.setState({speed})
    } else {
      speed += 10
      this.setState({speed})
    }
  }

  onClickApplyBrake = () => {
    let {speed} = this.state

    if (speed <= 0) {
      speed = 0
      this.setState({speed})
    } else {
      speed -= 10
      this.setState({speed})
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer-img"
            alt="speedometer"
          />
          <h1 className="speed-value">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              className="accelerate-btn"
              type="button"
              onClick={this.onClickAccelerateBtn}
            >
              Accelerate
            </button>
            <button
              className="apply-brake-btn"
              type="button"
              onClick={this.onClickApplyBrake}
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
