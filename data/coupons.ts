export type CouponType = RateCouponType | AmountCouponType;

interface RateCouponType {
  type: 'rate';
  title: string;
  discountRate: number;
}

interface AmountCouponType {
  type: 'amount';
  title: string;
  discountAmount: number;
}

const coupons: CouponType[] = [
  {
    type: 'rate',
    title: '10% 할인 쿠폰',
    discountRate: 10
  },
  {
    type: 'amount',
    title: '10,000원 할인 쿠폰',
    discountAmount: 10000
  }
];

export default coupons;
