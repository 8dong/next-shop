import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import GridLayout from '../../templates/GridLayout';
import ProductItem from '../molecules/ProductItem';
import ProductItemSkeletonBox from '../molecules/ProductItemSkeletonBox';
import FloatButton from '../atoms/button/FloatButton';

import cartListSlice from '../../../redux/slice/cartListSlice';

import useInfinityScroll from '../../../hooks/useInfinityScroll';

import type { ProductItemType } from '../../../data/productItems';
import type { RootState } from '../../../redux/store/store';

const ProductListSection = ({
  initialProductItems
}: {
  initialProductItems: ProductItemType[];
}) => {
  const cartList = useSelector((state: RootState) => state.cartList);
  const isInCartList = (productItem: ProductItemType) => {
    return cartList.some((cartProductItem) => cartProductItem.id === productItem.id);
  };

  const dispatch = useDispatch();
  const handleClickCartButton = (productItem: ProductItemType) => {
    return () => {
      if (isInCartList(productItem)) {
        dispatch(cartListSlice.actions.removeCartList({ productItems: [productItem] }));
      } else {
        dispatch(cartListSlice.actions.addCartList({ productItems: [productItem] }));
      }
    };
  };

  const {
    itemList: productItems,
    isFetchedDone,
    observerTargetEl
  } = useInfinityScroll({
    initialList: initialProductItems,
    fetchType: 'productList',
    fetchUrl: 'http://localhost:3000/api/fetchProductItems',
    fetchLength: 5
  });

  return (
    <GridLayout columnWidth='300px' rowWidth='330px'>
      {productItems.map((productItem) => (
        <ProductItemWrapper key={productItem.id}>
          <ProductItem productItem={productItem} />
          <FloatButton
            topPosition='85%'
            leftPosition='85%'
            onClick={handleClickCartButton(productItem)}
            btnColor={isInCartList(productItem) ? '#1890ff' : '#000'}
          >
            <i className='fi fi-rr-shopping-cart'></i>
          </FloatButton>
        </ProductItemWrapper>
      ))}
      {!isFetchedDone && (
        <li>
          <ProductItemSkeletonBox ref={observerTargetEl} />
        </li>
      )}
    </GridLayout>
  );
};

const ProductItemWrapper = styled.li`
  position: relative;
`;

export default ProductListSection;
