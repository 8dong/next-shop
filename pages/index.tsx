import Head from 'next/head';

import AdSection from '../components/UI/organisms/AdSection';
import ProductListSection from '../components/UI/organisms/ProductListSection';

import type { GetServerSideProps, NextPage } from 'next';
import type { ProductItemType } from '../data/productItems';

const Home: NextPage<{ initialProductItems: ProductItemType[] }> = ({ initialProductItems }) => {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <AdSection
        adTitle='준비물까지 챙겨주는 온라인 서비스'
        adDesc='취미를 시작하는데 필요한 모든 것을 준비해드려요'
        adImgSrc='/assets/ad_img.jpeg'
        adImgAlt='광고 이미지'
      />
      <ProductListSection initialProductItems={initialProductItems} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'http://shopitemapi-env.eba-zmpmdkiy.ap-northeast-2.elasticbeanstalk.com/',
    {
      method: 'POST',
      body: JSON.stringify({ fetchStartIndex: 0, fetchLength: 5 }),
      headers: {
        'Content-type': 'application/json'
      }
    }
  );

  const { fetchedProductItems } = await res.json();

  return {
    props: {
      initialProductItems: fetchedProductItems
    }
  };
};

export default Home;
