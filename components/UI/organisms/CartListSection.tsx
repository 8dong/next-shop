import { useSelector } from 'react-redux';
import styled from 'styled-components';

import GridLayout from '../../templates/GridLayout';
import ProductItem from '../molecules/ProductItem';
import Button from '../atoms/button/Button';
import FloatButton from '../atoms/button/FloatButton';

import cartListSlice from '../../../redux/slice/cartListSlice';

import type { RootState } from '../../../redux/store/store';
import type { ProductItemType } from '../../../data/productItems';

const CartListSection = () => {
  const cartList = useSelector((store: RootState) => store.cartList);
  const isInCartList = (productItem: ProductItemType) => {
    return cartList.some((cartItem) => cartItem.id === productItem.id);
  };

  return (
    <CartListSectionWrapper>
      <div className='cartHeader'>
        <h2>장바구니</h2>
        <div className='buttonGroup'>
          <Button>삭제</Button>
          <Button>전체 선택</Button>
        </div>
      </div>
      <GridLayout columnWidth='300px' rowWidth='330px'>
        {cartList.map((cartItem) => (
          <li key={cartItem.id} className='cartItem'>
            <ProductItem productItem={cartItem} />
            <FloatButton topPosition='5%' leftPosition='83%' bgColor='#fff'>
              <i className='fi fi-rr-cross'></i>
            </FloatButton>
            <FloatButton topPosition='45%' leftPosition='83%'>
              <i className='fi fi-rr-check'></i>
            </FloatButton>
          </li>
        ))}
      </GridLayout>
    </CartListSectionWrapper>
  );
};

const CartListSectionWrapper = styled.section`
  padding: 20px;

  .cartHeader {
    display: flex;
    justify-content: space-between;
  }

  .buttonGroup {
    dipslay: flex;
    justify-content: space-between;
  }

  .buttonGroup button {
    margin: 0 10px;
  }

  .cartItem {
    position: relative;
  }

  @media screen and (max-width: 1024px) {
    .cartHeader {
      flex-direction: column;
    }

    .buttonGroup {
      align-self: flex-end;
    }
  }
`;

export default CartListSection;
