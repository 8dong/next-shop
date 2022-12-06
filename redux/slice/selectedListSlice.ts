import { createSlice } from '@reduxjs/toolkit';

import type { ProductItemType } from '../../data/productItems';

const selectListSlice = createSlice({
  name: 'selectList',
  initialState: [] as ProductItemType[],
  reducers: {
    selectItem(state, action) {
      // action.payload.productItems => [productItem, ...];
      const newSelectList = state.concat(action.payload.productItems);
      return newSelectList;
    },
    deSelectItem(state, action) {
      // action.payload.productItems => [productItem, ...];
      const newSelectList = state.filter((state) => {
        return !action.payload.productItems.some(
          (productId: ProductItemType) => productId.id === state.id
        );
      });
      return newSelectList;
    }
  }
});

export default selectListSlice;
