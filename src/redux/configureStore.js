import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsSlice from './Rockets/RocketsReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    categories: 'katana',
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
