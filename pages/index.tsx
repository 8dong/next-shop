import AdSection from '../components/UI/organisms/AdSection';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <AdSection
        adTitle='준비물까지 챙겨주는 온라인 서비스'
        adDesc='취미를 시작하는데 필요한 모든 것을 준비해드려요'
        adImgSrc='/assets/ad_img.jpeg'
        adImgAlt='광고 이미지'
      />
    </>
  );
};

export default Home;
