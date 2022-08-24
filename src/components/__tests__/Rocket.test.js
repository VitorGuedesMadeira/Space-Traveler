import { render } from '@testing-library/react';
import Rocket from '../MyProfile';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import React from 'react';

describe('Rocket component', () => {
  test('Renders Rocket component', () => {
    const tree = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Rocket />
        </Router>
      </Provider>
    </React.StrictMode>,)
    expect(tree).toMatchSnapshot()
  })
});