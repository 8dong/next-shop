import styled from 'styled-components';

const Button = ({ children, onClick }: { children: string; onClick: Function }) => {
  const buttonClickHandler = () => {
    onClick();
  };

  return <ButtonWrapper onClick={buttonClickHandler}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  width: 100px;
  height: 50px;

  border: 1px solid #d4d4d4;
  border-radius: 5px;

  cursor: pointer;
`;

export default Button;
