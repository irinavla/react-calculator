import React, { Component } from 'react';
import ResultDisplay from '../ui/ResultDisplay/ResultDisplay';
import CalculatorKey from '../ui/CalculatorKey/CalculatorKey';
import CalculatorOperations from '../../reducers/calculatorOperations';
import './Calculator.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
 
class Calculator extends Component {
    
handleKeyDown = (ev) => {
    console.log('props',  this.props);

    let { key } = ev;

    if (key === 'Enter') {
        key = '='
    }

    if ((/\d/).test(key)) {
        ev.preventDefault();
        this.props.inputDigit(parseInt(key, 10))
    } else if (key in CalculatorOperations) {
        ev.preventDefault();
        this.props.performOperation(key)
    } else if (key === 'Delete') {
        ev.preventDefault();
        this.props.clearAll();
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
                    <CalculatorKey className="block clear vh-center border-bottom" onPress={() => this.props.clearAll()}>clear</CalculatorKey>

                    <div className="numbers">
                        <CalculatorKey className="key number vh-center" onPress={() => this.props.inputDigit(7)}>7</CalculatorKey>
                        <CalculatorKey className="key number vh-center" onPress={() => this.props.inputDigit(8)}>8</CalculatorKey>
                        <CalculatorKey className="key number vh-center" onPress={() => this.props.inputDigit(9)}>9</CalculatorKey>
                        <CalculatorKey className="key number vh-center" onPress={() => this.props.inputDigit(4)}>4</CalculatorKey>
                        <CalculatorKey className="key number vh-center" onPress={() => this.props.inputDigit(5)}>5</CalculatorKey>
                        <CalculatorKey className="key number vh-center" onPress={() => this.props.inputDigit(6)}>6</CalculatorKey>
                        <CalculatorKey className="key number vh-center" onPress={() => this.props.inputDigit(1)}>1</CalculatorKey>
                        <CalculatorKey className="key number vh-center" onPress={() => this.props.inputDigit(2)}>2</CalculatorKey>
                        <CalculatorKey className="key number vh-center" onPress={() => this.props.inputDigit(3)}>3</CalculatorKey>
                    </div>  

                    <CalculatorKey className="block number vh-center" onPress={() => this.props.inputDigit(0)}>0</CalculatorKey>

                </div>
                <div className="operators">

                    <CalculatorKey className="operator vh-center" onPress={() => this.props.performOperation('/')}>÷</CalculatorKey>
                    <CalculatorKey className="operator vh-center" onPress={() => this.props.performOperation('*')}>&times;</CalculatorKey>
                    <CalculatorKey className="operator vh-center" onPress={() => this.props.performOperation('-')}>-</CalculatorKey>
                    <CalculatorKey className="operator vh-center" onPress={() => this.props.performOperation('+')}>+</CalculatorKey>
                    <CalculatorKey className="operator vh-center" onPress={() => this.props.performOperation('=')}>=</CalculatorKey>  
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
        clearAll: () => { dispatch( actions.clearAll() ) },
        inputDigit: (digit) => { dispatch( actions.inputDigit(digit) ) },
        performOperation: (nextOperator) => { dispatch( actions.performOperation(nextOperator) ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)