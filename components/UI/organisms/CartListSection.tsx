import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';

import GridLayout from '../../templates/GridLayout';
import ProductItem from '../molecules/ProductItem';
import Button from '../atoms/button/Button';
import FloatButton from '../atoms/button/FloatButton';

import cartListSlice from '../../../redux/slice/cartListSlice';
import selectListSlice from '../../../redux/slice/selectedListSlice';

import type { RootState } from '../../../redux/store/store';
import type { ProductItemType } from '../../../data/productItems';

const CartListSection = () => {
  const cartList = useSelector((store: RootState) => store.cartList);
  const selectedList = useSelector((store: RootState) => store.selectedList);

  const dispatch = useDispatch();

  const isInSelectedList = (productItem: ProductItemType) => {
    return selectedList.some((selectedItem) => selectedItem.id === productItem.id);
  };

  const handleClickSelectButton = (productItem: ProductItemType) => {
    return () => {
      if (isInSelectedList(productItem)) {
        dispatch(selectListSlice.actions.deSelectItem({ productItems: [productItem] }));
      } else {
        dispatch(selectListSlice.actions.selectItem({ productItems: [productItem] }));
      }
    };
  };

  const handleClickRemoveButton = () => {
    dispatch(cartListSlice.actions.removeCartList({ productItems: [...selectedList] }));
    dispatch(selectListSlice.actions.deSelectItem({ productItems: [...selectedList] }));
  };

  const handleClickAllSelectButton = () => {
    const unSelectedList = cartList.filter((cartItem) => {
      return !isInSelectedList(cartItem);
    });

    dispatch(selectListSlice.actions.selectItem({ productItems: [...unSelectedList] }));
  };

  const handleClickCorssButton = (productItem: ProductItemType) => {
    return () => {
      dispatch(cartListSlice.actions.removeCartList({ productItems: [productItem] }));
      dispatch(selectListSlice.actions.deSelectItem({ productItems: [productItem] }));
    };
  };

  useEffect(() => {
    handleClickAllSelectButton();
  }, []);

  return (
    <CartListSectionWrapper>
      <div className='cartHeader'>
        <h2>장바구니</h2>
        <div className='buttonGroup'>
          <Button onClick={handleClickRemoveButton}>삭제</Button>
          <Button onClick={handleClickAllSelectButton}>전체 선택</Button>
        </div>
      </div>
      <GridLayout columnWidth='300px' rowWidth='330px'>
        {cartList.map((cartItem) => (
          <li key={cartItem.id} className='cartItem'>
            <ProductItem productItem={cartItem} />
            <FloatButton
              onClick={handleClickCorssButton(cartItem)}
              topPosition='5%'
              leftPosition='83%'
              bgColor='#fff'
            >
              <i className='fi fi-rr-cross'></i>
            </FloatButton>
            <FloatButton
              onClick={handleClickSelectButton(cartItem)}
              topPosition='45%'
              leftPosition='83%'
              bgColor={isInSelectedList(cartItem) ? '#0066ff' : '#fff'}
              btnColor={isInSelectedList(cartItem) ? '#fff' : '#000'}
            >
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
