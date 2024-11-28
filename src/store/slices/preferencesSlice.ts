import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language, Currency } from '../../types';

interface PreferencesState {
  language: Language;
  currency: Currency;
}

const initialState: PreferencesState = {
  language: 'en',
  currency: 'MAD'
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
    }
  }
});

export const { setLanguage, setCurrency } = preferencesSlice.actions;
export const preferencesReducer = preferencesSlice.reducer;