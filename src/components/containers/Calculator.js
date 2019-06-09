import React, { Component } from 'react';
import ResultDisplay from '../ui/ResultDisplay/ResultDisplay';
import CalculatorKey from '../ui/CalculatorKey/CalculatorKey';
import './Calculator.css';
import { connect } from 'react-redux';
 
const CalculatorOperations = {
    '/': (prevValue, nextValue) => prevValue / nextValue,
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '=': (prevValue, nextValue) => nextValue
}


class Calculator extends Component {
    
// inputDigit(digit) {
//     const { displayValue, waitingForOperand } = this.props;

//     if (waitingForOperand) {
//         this.setState({
//             displayValue: String(digit),
//             waitingForOperand: false
//         })
//         } else {
//             this.setState({
//             displayValue: displayValue === '0' ? String(digit) : displayValue + digit
//         })
//     }
// }

performOperation(nextOperator) {    
    const { value, displayValue, operator } = this.props;
    const inputValue = parseFloat(displayValue);
    
    if (value == null) {
      this.setState({
        value: inputValue
      })
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);
      
      this.setState({
        value: newValue,
        displayValue: String(newValue)
      })
    }
    
    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }
  

handleKeyDown = (ev) => {
    let { key } = ev;

    console.log(key);

    if (key === 'Enter') {
        key = '='
    }

    if ((/\d/).test(key)) {
        ev.preventDefault()
        this.inputDigit(parseInt(key, 10))
    } else if (key in CalculatorOperations) {
        ev.preventDefault()
        this.performOperation(key)
    } else if (key === 'Delete') {
        ev.preventDefault()
        this.clearAll();
    }
}


componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
}

componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
}

  render() {

    const { displayValue } = this.props;

    console.log(this.props);

    return (
      <div className="outer">

        <div className="calculator">
            <ResultDisplay  value={displayValue} />

            <div className="keypad">
                <div className="keys">
                <CalculatorKey className="clear vh-center" onPress={() => this.props.clearAll()}>clear</CalculatorKey>

                    <div className="numbers">
                        <CalculatorKey className="key vh-center" onPress={() => this.props.inputDigit(7)}>7</CalculatorKey>
                        <CalculatorKey className="key vh-center" onPress={() => this.props.inputDigit(8)}>8</CalculatorKey>
                        <CalculatorKey className="key vh-center" onPress={() => this.props.inputDigit(9)}>9</CalculatorKey>
                        <CalculatorKey className="key vh-center" onPress={() => this.props.inputDigit(4)}>4</CalculatorKey>
                        <CalculatorKey className="key vh-center" onPress={() => this.props.inputDigit(5)}>5</CalculatorKey>
                        <CalculatorKey className="key vh-center" onPress={() => this.props.inputDigit(6)}>6</CalculatorKey>
                        <CalculatorKey className="key vh-center" onPress={() => this.props.inputDigit(1)}>1</CalculatorKey>
                        <CalculatorKey className="key vh-center" onPress={() => this.props.inputDigit(2)}>2</CalculatorKey>
                        <CalculatorKey className="key vh-center" onPress={() => this.props.inputDigit(3)}>3</CalculatorKey>
                    </div>  

                </div>
                <div className="operators">

                    <CalculatorKey className="operator vh-center" onPress={() => this.performOperation('/')}>÷</CalculatorKey>
                    <CalculatorKey className="operator vh-center" onPress={() => this.performOperation('-')}>-</CalculatorKey>
                    <CalculatorKey className="operator vh-center" onPress={() => this.performOperation('+')}>+</CalculatorKey>
                    <CalculatorKey className="operator vh-center" onPress={() => this.performOperation('=')}>=</CalculatorKey>  
                </div>
            </div>
      </div>
    </div>

    )
  }
}

const mapStateToProps = (state) => {
    return {
        value: state.value,
        displayValue: state.displayValue,
        operator: state.operator,
        waitingForOperand: state.waitingForOperand
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        clearAll: () => { dispatch({type: 'CLEAR_ALL'}) },
        inputDigit: (digit) => { dispatch({ type: 'INPUT_DIGIT', digit: digit }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)