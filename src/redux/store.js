import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contacts/contact-slice';
import { authReducer } from './auth';
import { contactsReducer } from './contacts';
import persistReducer from 'redux-persist/es/persistReducer';


const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
/*   contactApi.middleware, */
];

const authPersisitConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

export const store = configureStore({
  reducer: {
  auth: persistReducer(authPersisitConfig, authReducer),
  contacts: contactsReducer
  // [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

//setupListeners(store.dispatch);


export const persistor = persistStore(store);
