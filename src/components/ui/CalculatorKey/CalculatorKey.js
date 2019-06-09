
import React, { Component } from 'react'
import PointTarget from 'react-point'
import './CalculatorKey.css';

class CalculatorKey extends Component {
  render() {
    const { onPress, className, ...props } = this.props
    
    return (
      <PointTarget onPoint={onPress}>
        <div className={`${className}`} {...props}></div>
      </PointTarget>
    )
  }
}

export default CalculatorKey