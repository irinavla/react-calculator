import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App from '../App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}> <App /></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
