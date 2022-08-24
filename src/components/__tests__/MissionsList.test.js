import { render } from '@testing-library/react';
import MissionsList from '../MyProfile';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import React from 'react';

describe('MyProfile component', () => {
  test('Renders MyProfile component', () => {
    const tree = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <MissionsList />
        </Router>
      </Provider>
    </React.StrictMode>,)
    expect(tree).toMatchSnapshot()
  })
});