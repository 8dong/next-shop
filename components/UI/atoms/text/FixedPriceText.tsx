import styled from 'styled-components';

const FixedPriceText = ({ fixedPrice }: { fixedPrice: number }) => {
  const content = fixedPrice.toLocaleString('ko-KR');

  return <FixedPriceTextWrapper>{content}원</FixedPriceTextWrapper>;
};

const FixedPriceTextWrapper = styled.span`
  font-size: 13px;
  font-style: italic;
  color: #818181;
`;

export default FixedPriceText;
