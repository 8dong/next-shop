import styled from 'styled-components';

type PriceType =
  | FixedPriceType
  | InstallmentPriceType
  | InstallmentMonth
  | TotalPriceType
  | DiscountAmountType
  | PaymentPriceType;

interface FixedPriceType {
  type: 'fixedPrice';
  fixedPrice: number;
}

interface InstallmentPriceType {
  type: 'installmentPrice';
  fixedPrice: number;
  installmentMonth: number;
}

interface InstallmentMonth {
  type: 'installmentMonth';
  installmentMonth: number;
}

interface TotalPriceType {
  type: 'totalPrice';
  totalPrice: number;
}

interface DiscountAmountType {
  type: 'discountAmount';
  discountAmount: number;
}

interface PaymentPriceType {
  type: 'paymentPrice';
  totalPrice: number;
  discountAmount: number;
}

const PriceText = ({ priceConfig }: { priceConfig: PriceType }) => {
  let textContent = '';
  let textConfig = {
    ftSize: '16px',
    ftWeight: '400',
    ftStyle: 'normal',
    ftColor: '#000'
  };

  if (priceConfig.type === 'fixedPrice') {
    textContent = priceConfig.fixedPrice.toLocaleString('ko-KR') + '원';

    textConfig.ftSize = '13px';
    textConfig.ftStyle = 'italic';
    textConfig.ftColor = '#818181';
  } else if (priceConfig.type === 'installmentPrice') {
    textContent = `월 ${Math.floor(
      priceConfig.fixedPrice / priceConfig.installmentMonth
    ).toLocaleString('ko-KR')}원`;

    textConfig.ftWeight = '700';
  } else if (priceConfig.type === 'installmentMonth') {
    textContent = `(${priceConfig.installmentMonth} 개월)`;

    textConfig.ftSize = '13px';
    textConfig.ftStyle = 'italic';
    textConfig.ftColor = '#818181';
  } else if (priceConfig.type === 'totalPrice') {
    textContent = priceConfig.totalPrice.toLocaleString('ko-KR') + '원';

    textConfig.ftColor = '#565656';
  } else if (priceConfig.type === 'discountAmount') {
    textContent = priceConfig.discountAmount.toLocaleString('ko-KR') + '원';

    textConfig.ftColor = '#565656';
  } else if (priceConfig.type === 'paymentPrice') {
    textContent = `${(priceConfig.totalPrice - priceConfig.discountAmount).toLocaleString(
      'ko-KR'
    )} 원`;

    textConfig.ftSize = '20px';
    textConfig.ftWeight = '700';
    textConfig.ftColor = '#565656';
  }

  return (
    <PriceTextWrapper
      ftSize={textConfig.ftSize}
      ftWeight={textConfig.ftWeight}
      ftStyle={textConfig.ftStyle}
      ftColor={textConfig.ftColor}
    >
      {textContent}
    </PriceTextWrapper>
  );
};

const PriceTextWrapper = styled.span<{
  ftSize: string;
  ftWeight: string;
  ftStyle: string;
  ftColor: string;
}>`
  font-size: ${(props) => props.ftSize};
  font-weight: ${(props) => props.ftWeight};
  font-style: ${(props) => props.ftStyle};
  color: ${(props) => props.ftColor};
`;

export default PriceText;
