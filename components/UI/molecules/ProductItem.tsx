import styled from 'styled-components';

import ImageElement from '../atoms/image/ImageElement';
import FixedPriceText from '../atoms/text/FixedPriceText';
import InstallmentMonthText from '../atoms/text/InstallmentMonthText';
import InstallmentPriceText from '../atoms/text/InstallmentPriceText';

import type { ProductItemType } from '../../../data/productItems';

const ProductItem = ({ productItem }: { productItem: ProductItemType }) => {
  return (
    <ProductItemWrapper>
      <div className='productItemImg'>
        <ImageElement imgSrc={productItem.coverImage} imgAlt={productItem.title} />
      </div>
      <div className='productItemInfo'>
        <strong className='productTitle'>{productItem.title}</strong>
        <div className='productItemPrice'>
          <span className='fixedPrice'>
            <FixedPriceText fixedPrice={productItem.price} />
          </span>
          <div>
            <span className='installmentPrice'>
              <InstallmentPriceText fixedPrice={productItem.price} installmentMonth={5} />
            </span>
            <InstallmentMonthText installmentMonth={5} />
          </div>
        </div>
      </div>
    </ProductItemWrapper>
  );
};

const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 330px;

  position: relative;

  .productItemImg {
    height: 200px;

    margin-bottom: 10px;
  }

  .productTitle {
    font-weight: 400;
    word-break: keep-all;
  }

  .productItemInfo {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0 10px;
  }

  .productItemPrice {
    display: flex;
    flex-direction: column;
  }

  .fixedPrice {
    margin-bottom: 5px;
  }

  .installmentPrice {
    margin-right: 5px;
  }
`;

export default ProductItem;
