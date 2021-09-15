import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import rootReducer from './rootReducer';
import { api } from '../api/baseApi';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
