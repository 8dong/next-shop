import CartListSection from '../components/UI/organisms/CartListSection';
import CouponSection from '../components/UI/organisms/CouponSection';
import SelectedListSection from '../components/UI/organisms/SelectedListSection';

import coupons from '../data/coupons';

const Cart = () => {
  return (
    <>
      <CartListSection />
      <SelectedListSection />
      <CouponSection coupons={coupons} />
    </>
  );
};

export default Cart;
