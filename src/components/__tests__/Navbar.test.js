import { render } from '@testing-library/react';
import Navbar from '../Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import React from 'react';

describe('Navbar component', () => {
  test('Renders Navbar component', () => {
    const tree = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    </React.StrictMode>,)
    expect(tree).toMatchSnapshot()
  })
});