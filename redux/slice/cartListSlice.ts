import { createSlice } from '@reduxjs/toolkit';

import type { ProductItemType } from '../../data/productItems';

const cartListSlice = createSlice({
  name: 'cartList',
  initialState: [] as ProductItemType[],
  reducers: {
    addCartList(state, action) {
      // action.payload.productItems => [productItem, ...];
      const newCartList = state.concat(action.payload.productItems);
      window.localStorage.setItem('cartList', JSON.stringify(newCartList));
      return newCartList;
    },
    removeCartList(state, action) {
      // action.payload.productItems => [productItem, ...];
      const newCartList = state.filter((state) => {
        return !action.payload.productItems.some(
          (productId: ProductItemType) => productId.id === state.id
        );
      });
      window.localStorage.setItem('cartList', JSON.stringify(newCartList));
      return newCartList;
    }
  }
});

export default cartListSlice;
