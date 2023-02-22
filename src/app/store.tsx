import { configureStore } from '@reduxjs/toolkit';
import goodsSlice from './features/goods/goodsSlice';

const store = configureStore({
  reducer: {
    goods: goodsSlice,
  }
});

export default store;
