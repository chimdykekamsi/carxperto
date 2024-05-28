import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './slice/authSlice';
import chatSlice from './slice/chatSlice';
import { authApi } from './api/authApi';
import { chatApi } from './api/chatApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    auth: authSlice,
    chat: chatSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, chatApi.middleware)
});

setupListeners(store.dispatch);

export default store;
