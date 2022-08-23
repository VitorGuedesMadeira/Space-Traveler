import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsSlice from './Rockets/RocketsReducer';
import missionsReducer from './Missions/MissionsReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
