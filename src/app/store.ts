import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import { thunk } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import feedsReducer from '@features/feed/store/feedsSlice';
import { apiSlice } from '@features/feed/api/apiSlice';

export const store = configureStore({
  reducer: {
    feeds: feedsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
