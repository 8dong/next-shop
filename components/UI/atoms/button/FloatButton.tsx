import React from 'react';
import styled from 'styled-components';

interface FloatButtonProps {
  children: React.ReactNode;
  onClick: Function;
  topPosition: string;
  leftPosition: string;
  btnColor?: string;
  bgColor?: string;
}

const FloatButton = ({
  children,
  onClick,
  topPosition,
  leftPosition,
  btnColor,
  bgColor
}: FloatButtonProps) => {
  const handleClickFloatButton = () => {
    onClick();
  };

  return (
    <FloatButtonWrapper
      onClick={handleClickFloatButton}
      topPosition={topPosition}
      leftPosition={leftPosition}
      btnColor={btnColor}
      bgColor={bgColor}
    >
      {children}
    </FloatButtonWrapper>
  );
};

const FloatButtonWrapper = styled.button<{
  topPosition: string;
  leftPosition: string;
  btnColor?: string;
  bgColor?: string;
}>`
  position: absolute;
  top: ${(props) => props.topPosition};
  left: ${(props) => props.leftPosition};

  border-radius: 50%;

  background-color: ${(props) => props.bgColor ?? 'transparent'};

  cursor: pointer;

  i {
    display: flex;
    align-items: center;

    padding: 0.3em;

    font-size: 1.5em;
    color: ${(props) => props.btnColor ?? '#000'};
  }
`;

export default FloatButton;
