import styled from 'styled-components';
import { useSelector } from 'react-redux';

import PriceText from '../atoms/text/PriceText';

import type { RootState } from '../../../redux/store/store';

const PaymentSection = () => {
  const selectedList = useSelector((store: RootState) => store.selectedList);
  const selectedCoupon = useSelector((store: RootState) => store.selectedCoupon);

  const totalPrice = selectedList.reduce((prev, product) => prev + product.price, 0);

  const discountAmount = selectedList.reduce((prev, selectedProduct) => {
    if (selectedProduct.availableCoupon === false) {
      return prev + 0;
    } else if (selectedCoupon.type === 'amount') {
      return selectedCoupon.discountAmount;
    } else if (selectedCoupon.type === 'rate') {
      return prev + Math.floor(selectedProduct.price / selectedCoupon.discountRate);
    }
    return prev;
  }, 0);

  return (
    <PaymentSectionWrapper>
      <h3>결제 금액</h3>
      <dl>
        <div>
          <dt>총 상품 금액</dt>
          <dd>
            <PriceText priceConfig={{ type: 'totalPrice', totalPrice }} />
          </dd>
        </div>
        <div>
          <dt>상품 할인 금액</dt>
          <dd>
            <PriceText priceConfig={{ type: 'discountAmount', discountAmount }} />
          </dd>
        </div>
        <div>
          <dt>
            <strong>최종 결제 금액</strong>
          </dt>
          <dd>
            <PriceText priceConfig={{ type: 'paymentPrice', totalPrice, discountAmount }} />
          </dd>
        </div>
      </dl>
    </PaymentSectionWrapper>
  );
};

const PaymentSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  background-color: #e3e3e3;

  h3 {
    margin-bottom: 40px;
  }

  dl div {
    display: flex;
    justify-content: space-between;

    height: 50px;
  }

  dt,
  dd {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px;
  }
`;

export default PaymentSection;
