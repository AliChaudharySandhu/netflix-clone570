import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import {moviesApi} from '../features/moviesApi';

export default configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    user: userReducer,
  },
});
