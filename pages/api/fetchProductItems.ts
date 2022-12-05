import productItems from '../../data/productItems';

import type { NextApiHandler } from 'next';

const fetchProductItems: NextApiHandler = async (req, res) => {
  const fetchStartIndex = req.body.fetchStartIndex;

  if (req.body.fetchLength === undefined) {
    const fetchedProductItems = productItems.slice();

    res.status(200).json({ fetchedProductItems, isDone: true });
    return;
  }

  let fetchEndIndex = fetchStartIndex + req.body.fetchLength;

  if (fetchEndIndex >= productItems.length) {
    fetchEndIndex = productItems.length;
    const fetchedProductItems = productItems.slice(fetchStartIndex, fetchEndIndex);

    res.status(200).json({ fetchedProductItems, isDone: true });
  } else {
    const fetchedProductItems = productItems.slice(fetchStartIndex, fetchEndIndex);

    res.status(200).json({ fetchedProductItems, isDone: false });
  }
};

export default fetchProductItems;
