import { useState, useRef, useCallback, useEffect } from 'react';

import AdSection from '../components/UI/organisms/AdSection';
import GridLayout from '../components/templates/GridLayout';
import ProductListSection from '../components/UI/organisms/ProductListSection';
import ProductItemSkeletonBox from '../components/UI/molecules/ProductItemSkeletonBox';

import type { GetServerSideProps, NextPage } from 'next';
import type { ProductItemType } from '../data/productItems';

const Home: NextPage<{ initialProductItems: ProductItemType[] }> = ({ initialProductItems }) => {
  const [productItems, setProductItems] = useState(initialProductItems);
  const [isFetchedDone, setIsFetchedDone] = useState(false);

  const observerTargetEl = useRef<HTMLDivElement>(null);

  const fetchShopItems = useCallback(async () => {
    const res = await fetch('http://localhost:3001/api/fetchProductItems', {
      method: 'POST',
      body: JSON.stringify({ fetchStartIndex: productItems.length, fetchLength: 5 }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const { fetchedProductItems, isDone } = await res.json();

    setProductItems((prevList) => [...prevList, ...fetchedProductItems]);
    setIsFetchedDone(isDone);
  }, [productItems]);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry]) => {
      if (entry.isIntersecting && !isFetchedDone) {
        fetchShopItems();
      }
    },
    [isFetchedDone, fetchShopItems]
  );

  useEffect(() => {
    if (!observerTargetEl.current) return;

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.9 });
    observer.observe(observerTargetEl.current);

    return () => observer.disconnect();
  });

  return (
    <>
      <AdSection
        adTitle='준비물까지 챙겨주는 온라인 서비스'
        adDesc='취미를 시작하는데 필요한 모든 것을 준비해드려요'
        adImgSrc='/assets/ad_img.jpeg'
        adImgAlt='광고 이미지'
      />
      <GridLayout columnWidth='300px' rowWidth='330px'>
        <ProductListSection productItems={productItems} location='home' />
        {!isFetchedDone && (
          <li>
            <ProductItemSkeletonBox ref={observerTargetEl} />
          </li>
        )}
      </GridLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/api/fetchProductItems', {
    method: 'POST',
    body: JSON.stringify({ fetchStartIndex: 0, fetchLength: 5 }),
    headers: {
      'Content-type': 'application/json'
    }
  });

  const { fetchedProductItems } = await res.json();

  return {
    props: {
      initialProductItems: fetchedProductItems
    }
  };
};

export default Home;
