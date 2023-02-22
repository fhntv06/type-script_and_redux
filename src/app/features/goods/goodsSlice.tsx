import { createSlice } from '@reduxjs/toolkit';

export const selectGoods = ({ goods }: any): string[] => goods;

const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    goods: [],
  },
  reducers: {
    removeGoods: ({ goods }: any, action): void => {
      const index = goods.indexOf(action.payload);
      goods.splice(index, 1);
      // localStorage.getItem('name');
    },
    addGoods: ({ goods }: any, action): void => {
      goods.push(action.payload);
      // localStorage.setItem('name', state.name);
    }
  }
});

export const { removeGoods, addGoods } = goodsSlice.actions;

export default goodsSlice.reducer;