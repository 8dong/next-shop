import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import LogoText from '../atoms/text/LogoText';
import FloatButton from '../atoms/button/FloatButton';
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
        <FloatButton topPosition='' leftPosition='' onClick={handleClickHeaderCartButton}>
          <i className='fi fi-rr-shopping-cart'></i>
        </FloatButton>
        <CountBadgeElement count={cartList.length} topPosition='-10%' leftPosition='-10%' />
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
    width: 40px;
    height: 40px;

    position: absolute;
    left: 90%;
  }

  @media screen and (max-width: 768px) {
    & {
      height: 70px;
    }
`;

export default HeaderSection;
