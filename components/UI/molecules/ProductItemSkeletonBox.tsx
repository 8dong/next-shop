import { forwardRef } from 'react';
import styled from 'styled-components';

import SkeletonElement from '../atoms/image/SkeletonElement';

const ProductItemSkeletonBox = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <ProductItemSkeletonBoxWrapper ref={ref}>
      <div className='productItemImg'>
        <SkeletonElement />
      </div>
      <div className='productItemInfo'>
        <div className='productItemTitle'>
          <SkeletonElement />
        </div>
        <div className='productItemPrice'>
          <div className='fixedPrice'>
            <SkeletonElement />
          </div>
          <div className='installment'>
            <div className='installmentPrice'>
              <SkeletonElement />
            </div>
            <div className='installmentMonth'>
              <SkeletonElement />
            </div>
          </div>
        </div>
      </div>
    </ProductItemSkeletonBoxWrapper>
  );
});

const ProductItemSkeletonBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 330px;

  .productItemImg {
    height: 200px;

    margin-bottom: 10px;
  }

  .productItemInfo {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0 10px;
  }

  .productItemTitle {
    width: 100%;
    height: 1.8em;
    border-radius: 5px;

    overflow: hidden;
  }

  .productItemPrice {
    display: flex;
    flex-direction: column;
  }

  .fixedPrice {
    width: 30%;
    height: 1.5em;
    margin-bottom: 5px;
    border-radius: 5px;

    overflow: hidden;
  }

  .installment {
    display: flex;
    align-items: center;
  }

  .installmentPrice {
    width: 40%;
    height: 1.8em;
    margin-right: 5px;
    border-radius: 5px;

    overflow: hidden;
  }

  .installmentMonth {
    width: 20%;
    height: 1.5em;
    border-radius: 5px;

    overflow: hidden;
  }
`;

ProductItemSkeletonBox.displayName = 'ProductItemSkeletonBox';

export default ProductItemSkeletonBox;
