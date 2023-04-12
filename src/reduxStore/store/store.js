import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  //reducers
import { userFavorites } from 'reduxStore/reducers/user/user';


//Here we can add as much reducers as we want
const rootReducer = combineReducers({ 
    userFavorites: userFavorites
})

//Here is the persist configuration where we are blaclisting search to not persis it storage
const persistConfig = {
  key: 'root',
  storage,
}

//Here we are passing the combine reducers with the persist config
const persistedReducer = persistReducer(persistConfig, rootReducer)

//The configuration of the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  })
})

export const persistor = persistStore(store)
