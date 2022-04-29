import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import carReducer from './slice/carSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    car: carReducer,
  },
});
