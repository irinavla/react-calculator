import React, { Component } from 'react';
import ResultDisplay from '../ui/ResultDisplay/ResultDisplay';
import CalculatorKey from '../ui/CalculatorKey/CalculatorKey';
import './Calculator.css';

const CalculatorOperations = {
    '÷': (prevValue, nextValue) => prevValue / nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '=': (prevValue, nextValue) => nextValue
}


class Calculator extends Component {

state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false
};
    
clearAll() {
    this.setState({
        value: null,
        displayValue: '0',
        operator: null,
        waitingForOperand: false
    })
    }

    clearDisplay() {
    this.setState({
        displayValue: '0'
    })
    }
    

    clearLastChar() {
        const { displayValue } = this.state
        
        this.setState({
            displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
        })
    }


    toggleSign() {
        const { displayValue } = this.state
        const newValue = parseFloat(displayValue) * -1
        
        this.setState({
          displayValue: String(newValue)
        })
      }

  render() {

    const { displayValue } = this.state;

    return (
      <div className="outer">

        <div className="calculator">
            <ResultDisplay  value={displayValue} />

            <div className="keypad">
                <div className="keys">
                <CalculatorKey className="clear vh-center">clear</CalculatorKey>
                    <div className="numbers">
                        <CalculatorKey className="key vh-center">7</CalculatorKey>
                        <CalculatorKey className="key vh-center">8</CalculatorKey>
                        <CalculatorKey className="key vh-center">9</CalculatorKey>
                        <CalculatorKey className="key vh-center">4</CalculatorKey>
                        <CalculatorKey className="key vh-center">5</CalculatorKey>
                        <CalculatorKey className="key vh-center">6</CalculatorKey>
                        <CalculatorKey className="key vh-center">1</CalculatorKey>
                        <CalculatorKey className="key vh-center">2</CalculatorKey>
                        <CalculatorKey className="key vh-center">3</CalculatorKey>
                    </div>

                </div>
                <div className="operators">

                    <CalculatorKey className="operator vh-center">÷</CalculatorKey>
                    <CalculatorKey className="operator vh-center">-</CalculatorKey>
                    <CalculatorKey className="operator vh-center">+</CalculatorKey>
                    <CalculatorKey className="operator vh-center">=</CalculatorKey>

                </div>
            </div>
      </div>
    </div>

    )
  }
}

export default Calculator