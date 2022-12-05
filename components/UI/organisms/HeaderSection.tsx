import styled from 'styled-components';
import { useRouter } from 'next/router';

import LogoText from '../atoms/text/LogoText';
import CartButton from '../atoms/button/CartButton';

const HeaderSection = ({ logoText }: { logoText: string }) => {
  const router = useRouter();
  const handleClickHeaderCartButton = () => {
    router.push('/cart');
  };

  return (
    <HeaderSectionWrapper>
      <LogoText logoText={logoText} />
      <CartButton topPosition='' leftPosition='90%' onClick={handleClickHeaderCartButton} />
    </HeaderSectionWrapper>
  );
};

const HeaderSectionWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;

  background-color: #fff;


  @media screen and (max-width: 768px) {
    & {
      height: 70px;
    }
`;

export default HeaderSection;
