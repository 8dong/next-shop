import Head from 'next/head';

import CartListSection from '../components/UI/organisms/CartListSection';
import CouponSection from '../components/UI/organisms/CouponSection';
import PaymentSection from '../components/UI/organisms/PaymentSection';
import SelectedListSection from '../components/UI/organisms/SelectedListSection';

import coupons from '../data/coupons';

const Cart = () => {
  return (
    <>
      <Head>
        <title>상품 장바구니 페이지</title>
      </Head>
      <CartListSection />
      <SelectedListSection />
      <CouponSection coupons={coupons} />
      <PaymentSection />
    </>
  );
};

export default Cart;
