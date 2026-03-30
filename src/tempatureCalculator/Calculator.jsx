import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9
}

const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
}

const tryConvert = (temperature, convertFunc) => {
  const tem = parseFloat(temperature)
  if (Number.isNaN(tem)) {
    return ''
  }
  let output = convertFunc(tem)
  output = Math.round(output * 1000) / 1000
  return output
}
export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: '',
      scale: 'c'
    }
  }
  handleChange = (scale) => (value) => {
    this.setState({
      temperature: value,
      scale: scale
    })
  }

  render() {
    const { scale, temperature } = this.state
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <TemperatureInput title={scaleNames.c} temperature={celsius} onTemperatureChange={this.handleChange('c')} />
        <TemperatureInput title={scaleNames.f} temperature={fahrenheit} onTemperatureChange={this.handleChange('f')} />
        <BoilingVerdict celsius={celsius || 0} />
      </div>
    )
  }
}

export default Calculator
