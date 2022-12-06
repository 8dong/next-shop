import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import LogoText from '../atoms/text/LogoText';
import CartButton from '../atoms/button/CartButton';
import CountBadgeElement from '../atoms/image/CountBadgeElement';

import type { RootState } from '../../../redux/store/store';

const HeaderSection = ({ logoText }: { logoText: string }) => {
  const router = useRouter();
  const handleClickHeaderCartButton = () => {
    router.push('/cart');
  };

  const cartList = useSelector((store: RootState) => store.cartList);

  return (
    <HeaderSectionWrapper>
      <LogoText logoText={logoText} />
      <div className='cartButton'>
        <CartButton topPosition='' leftPosition='' onClick={handleClickHeaderCartButton} />
        <CountBadgeElement count={cartList.length} topPosition='-40%' leftPosition='-40%' />
      </div>
    </HeaderSectionWrapper>
  );
};

const HeaderSectionWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;

  background-color: #fff;

  .cartButton {
    width: 24px;
    height: 24px;

    position: absolute;
    left: 90%;
  }

  @media screen and (max-width: 768px) {
    & {
      height: 70px;
    }
`;

export default HeaderSection;
