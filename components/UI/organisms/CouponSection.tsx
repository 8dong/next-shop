import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import SelectBox from '../atoms/input/SelectBox';
import Button from '../atoms/button/Button';

import selectedCouponSlice from '../../../redux/slice/selectedCouponSlice';

import type { RootState } from '../../../redux/store/store';
import type { CouponType } from '../../../data/coupons';

const CouponSection = ({ coupons }: { coupons: CouponType[] }) => {
  const selectedList = useSelector((store: RootState) => store.selectedList);
  const selectedCoupon = useSelector((store: RootState) => store.selectedCoupon);

  const [selectedOption, setSelectedOption] = useState(selectedCoupon.title);

  const dispatch = useDispatch();

  const hadleClickApplyButton = () => {
    const selectedCoupon = coupons.find((coupon) => coupon.title === selectedOption);

    dispatch(selectedCouponSlice.actions.selectedCoupon(selectedCoupon));
  };

  const handleClickOptimalApplyButton = () => {
    let optimalCoupon = selectedCoupon;
    let optimalDiscountAmount = 0;

    coupons.forEach((coupon) => {
      let discountAmount = selectedList.reduce((prev, selectedProduct) => {
        if (!selectedProduct.availableCoupon) {
          if (coupon.type === 'amount') {
            return coupon.discountAmount;
          } else if (coupon.type === 'rate') {
            return (prev += Math.floor(selectedProduct.price / coupon.discountRate));
          }
        }
        return prev + 0;
      }, 0);

      if (discountAmount > optimalDiscountAmount) {
        optimalCoupon = coupon;
        optimalDiscountAmount = discountAmount;
      }
    });

    dispatch(selectedCouponSlice.actions.selectedCoupon(optimalCoupon));
    setSelectedOption(optimalCoupon.title);
  };

  return (
    <CouponListSectionWrapper>
      <h3>쿠폰</h3>
      <div className='couponList'>
        <SelectBox
          options={coupons.map((coupon) => coupon.title)}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
        <div className='buttonGroup'>
          <Button onClick={hadleClickApplyButton}>적용</Button>
          <Button onClick={handleClickOptimalApplyButton}>최적 적용</Button>
        </div>
      </div>
    </CouponListSectionWrapper>
  );
};

const CouponListSectionWrapper = styled.section`
  padding: 20px;

  h3 {
    margin-bottom: 20px;
  }

  .couponList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .buttonGroup {
    padding: 20px 0;
  }

  .buttonGroup button:first-child {
    margin-right: 10px;
  }
`;

export default CouponSection;
