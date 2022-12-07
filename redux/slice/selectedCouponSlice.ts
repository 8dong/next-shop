import { createSlice } from '@reduxjs/toolkit';

import type { CouponType } from '../../data/coupons';

const selectedCouponSlice = createSlice({
  name: 'selectedCoupon',
  initialState: { type: 'amount', title: '선택해주세요', discountAmount: 0 } as CouponType,
  reducers: {
    selectedCoupon(_, action) {
      return action.payload;
    }
  }
});

export default selectedCouponSlice;
