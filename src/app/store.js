import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    promotions: promotionsReducer,
    partners: partnersReducer,
    comments: commentsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
