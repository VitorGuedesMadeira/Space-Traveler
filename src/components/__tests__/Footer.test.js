import { render } from '@testing-library/react';
import Footer from '../Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import React from 'react';

describe('Footer component', () => {
  test('Renders Footer component', () => {
    const tree = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
    </React.StrictMode>,)
    expect(tree).toMatchSnapshot()
  })
});