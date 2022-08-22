import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/RocketsReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    categories: 'katana',
  },
});

export default store;
