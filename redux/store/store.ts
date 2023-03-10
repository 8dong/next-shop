import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartListSlice from '../slice/cartListSlice';
import selectListSlice from '../slice/selectedListSlice';
import selectedCouponSlice from '../slice/selectedCouponSlice';

const rootReducers = combineReducers({
  cartList: cartListSlice.reducer,
  selectedList: selectListSlice.reducer,
  selectedCoupon: selectedCouponSlice.reducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartList']
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
