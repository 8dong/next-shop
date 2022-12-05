import styled from 'styled-components';

const AdTitleText = ({ adTitle }: { adTitle: string }) => {
  return <AdTitleTextWrapper>{adTitle}</AdTitleTextWrapper>;
};

const AdTitleTextWrapper = styled.h2`
  font-size: 30px;
  color: #fff;
  word-break: keep-all;
`;

export default AdTitleText;
