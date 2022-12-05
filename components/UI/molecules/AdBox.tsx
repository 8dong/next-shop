import styled from 'styled-components';

import AdTitleText from '../atoms/text/AdTitleText';
import AdDescText from '../atoms/text/AdDescText';

const AdBox = ({ adTitle, adDesc }: { adTitle: string; adDesc: string }) => {
  return (
    <AdBoxWrapper>
      <div className='adTitle'>
        <AdTitleText adTitle={adTitle} />
      </div>
      <div className='adDesc'>
        <AdDescText adDesc={adDesc} />
      </div>
    </AdBoxWrapper>
  );
};

const AdBoxWrapper = styled.div`
  .adTitle {
    width: 60%;
    margin-bottom: 20px;
  }

  .adDesc {
    display: block;
    width: 60%;
  }
`;

export default AdBox;
