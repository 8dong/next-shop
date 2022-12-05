import styled from 'styled-components';

import AdBox from '../molecules/AdBox';
import ImageElement from '../atoms/image/ImageElement';

interface AdSectionProps {
  adTitle: string;
  adDesc: string;
  adImgSrc: string;
  adImgAlt: string;
}

const AdSection = ({ adTitle, adDesc, adImgSrc, adImgAlt }: AdSectionProps) => {
  return (
    <AdSectionWrapper>
      <div className='adInfo'>
        <AdBox adTitle={adTitle} adDesc={adDesc} />
      </div>
      <div className='adImg'>
        <ImageElement imgSrc={adImgSrc} imgAlt={adImgAlt} />
      </div>
    </AdSectionWrapper>
  );
};

const AdSectionWrapper = styled.section`
  display: flex;

  background-color: #2b2b2b;

  .adInfo,
  .adImg {
    width: 50%;
    height: 300px;
  }

  .adInfo {
    padding: 30px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    .adInfo {
      width: 100%;
      height: auto;
    }

    .adImg {
      width: 70%;
      margin-bottom: 20px;
    }
  }
`;

export default AdSection;
