import { useState, useRef, useEffect, useCallback } from 'react';

import type { ProductItemType } from './../data/productItems';

interface productListInfinityScorllConfig {
  initialList: ProductItemType[];
  fetchType: 'productList';
  fetchUrl: string;
  fetchLength: number;
}

const useInfinityScroll = (infinityScrollConfig: productListInfinityScorllConfig) => {
  const { initialList, fetchType, fetchUrl, fetchLength } = infinityScrollConfig;

  const [itemList, setItemList] = useState(initialList);
  const [isFetchedDone, setIsFetchedDone] = useState(false);

  const observerTargetEl = useRef<HTMLDivElement>(null);

  const fetchItems = useCallback(async () => {
    const res = await fetch(fetchUrl, {
      method: 'POST',
      body: JSON.stringify({ fetchStartIndex: itemList.length, fetchLength }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    if (fetchType === 'productList') {
      const { fetchedProductItems, isDone } = await res.json();

      setItemList((prevList) => [...prevList, ...fetchedProductItems]);
      setIsFetchedDone(isDone);
    }
  }, [itemList, fetchUrl, fetchLength, fetchType]);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry]) => {
      if (entry.isIntersecting && !isFetchedDone) {
        fetchItems();
      }
    },
    [isFetchedDone, fetchItems]
  );

  useEffect(() => {
    if (!observerTargetEl.current) return;

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.9 });
    observer.observe(observerTargetEl.current);

    return () => observer.disconnect();
  });

  return { itemList, isFetchedDone, observerTargetEl };
};

export default useInfinityScroll;
