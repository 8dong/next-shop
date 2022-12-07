import CartListSection from '../components/UI/organisms/CartListSection';
import CouponSection from '../components/UI/organisms/CouponSection';
import PaymentSection from '../components/UI/organisms/PaymentSection';
import SelectedListSection from '../components/UI/organisms/SelectedListSection';

import coupons from '../data/coupons';

const Cart = () => {
  return (
    <>
      <CartListSection />
      <SelectedListSection />
      <CouponSection coupons={coupons} />
      <PaymentSection />
    </>
  );
};

export default Cart;
