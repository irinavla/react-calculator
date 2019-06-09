import React from 'react';

import renderer from 'react-test-renderer'
import CalculatorKey from '../components/ui/CalculatorKey/CalculatorKey';


it('renders correctly', () => {
  const tree = renderer.create( <CalculatorKey />).toJSON();

  expect(tree).toMatchSnapshot();
});