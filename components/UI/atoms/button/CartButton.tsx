import styled from 'styled-components';

interface CartButtonProps {
  onClick: Function;
  topPosition: string;
  leftPosition: string;
  btnColor?: string;
}

const CartButton = ({ onClick, topPosition, leftPosition, btnColor }: CartButtonProps) => {
  const handleClickCartButton = () => {
    onClick();
  };

  return (
    <CartButtonWrapper
      topPosition={topPosition}
      leftPosition={leftPosition}
      onClick={handleClickCartButton}
      btnColor={btnColor}
    >
      <i className='fi fi-rr-shopping-cart'></i>
    </CartButtonWrapper>
  );
};

const CartButtonWrapper = styled.button<{
  topPosition: string;
  leftPosition: string;
  btnColor?: string;
}>`
  position: absolute;
  top: ${(props) => props.topPosition};
  left: ${(props) => props.leftPosition};

  cursor: pointer;

  i {
    display: flex;
    align-items: center;

    font-size: 1.5em;
    color: ${(props) => props.btnColor ?? '#000'};
  }
`;

export default CartButton;
