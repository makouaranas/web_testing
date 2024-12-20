import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { preferencesReducer } from './slices/preferencesSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  preferences: preferencesReducer
});