import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  value: null,
  displayValue: '0',
  operator: null,
  waitingForOperand: false
}

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '=': (prevValue, nextValue) => nextValue
}

const inputDigit = (state, action) => {
  console.log(state, action);
  return state;
}

const clearAll = () => {
  return INITIAL_STATE;
}


const rootReducer = (state = INITIAL_STATE, action) => {
  // return state;
  switch(action.type){
    case actionTypes.INPUT_DIGIT:
      return inputDigit(state, action);

    case actionTypes.PERFORM_OPERATION:
        return {
            ...state,
            value: 0
        }

    case actionTypes.KEY_DOWN:
        return {
          ...state
        }    

    case actionTypes.CLEAR_ALL: 
        return clearAll();   
    default:
        return state;
}
}

export default rootReducer