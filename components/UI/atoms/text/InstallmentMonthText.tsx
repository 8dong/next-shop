import styled from 'styled-components';

const InstallmentMonthText = ({ installmentMonth }: { installmentMonth: number }) => {
  return <InstallmentMonthTextWrapper>({installmentMonth} 개월)</InstallmentMonthTextWrapper>;
};

const InstallmentMonthTextWrapper = styled.span`
  font-size: 13px;
  color: #818181;
`;

export default InstallmentMonthText;
