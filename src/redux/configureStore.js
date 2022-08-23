import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './Rockets/RocketsReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    categories: 'katana',
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
