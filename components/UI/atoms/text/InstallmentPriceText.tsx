const InstallmentPriceText = ({
  fixedPrice,
  installmentMonth
}: {
  fixedPrice: number;
  installmentMonth: number;
}) => {
  const content = Math.floor(fixedPrice / installmentMonth).toLocaleString('ko-KR');

  return <strong>월 {content}원</strong>;
};

export default InstallmentPriceText;
