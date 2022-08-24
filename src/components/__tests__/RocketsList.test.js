import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import React from 'react';
import RocketsList from '../RocketsList';


describe('RocketsList component', () => {
    test('Renders RocketsList component', () => {
      const tree = render(
        <React.StrictMode>
          <Provider store={store}>
            <Router>
              <RocketsList />
            </Router>
          </Provider>
        </React.StrictMode>,
      )
      expect(tree).toMatchSnapshot()
    });
});