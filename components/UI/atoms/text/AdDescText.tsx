import styled from 'styled-components';

const AdDescText = ({ adDesc }: { adDesc: string }) => {
  return <AdDescTextWrapper>{adDesc}</AdDescTextWrapper>;
};

const AdDescTextWrapper = styled.strong`
  font-size: 18px;
  font-weight: 400;
  color: #afafaf;
  word-break: keep-all;
`;

export default AdDescText;
