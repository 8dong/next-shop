import ProductItem from '../molecules/ProductItem';

import type { ProductItemType } from '../../../data/productItems';

const ProductListSection = ({
  productItems,
  location
}: {
  productItems: ProductItemType[];
  location: 'home';
}) => {
  return (
    <>
      {productItems.map((productItem) => (
        <li key={productItem.id}>
          <ProductItem productItem={productItem} location={location} />
        </li>
      ))}
    </>
  );
};

export default ProductListSection;
