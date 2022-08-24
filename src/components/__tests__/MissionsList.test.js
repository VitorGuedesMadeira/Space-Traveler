import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../../redux/configureStore';
import MissionsList from '../MyProfile';

describe('MyProfile component', () => {
  test('Renders MyProfile component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <MissionsList />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
