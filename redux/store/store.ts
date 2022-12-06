import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartListSlice from '../slice/cartListSlice';

const rootReducers = combineReducers({
  cartList: cartListSlice.reducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
