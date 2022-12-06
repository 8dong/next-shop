import styled from 'styled-components';

const CountBadgeElement = ({
  count,
  topPosition,
  leftPosition
}: {
  count: number;
  topPosition: string;
  leftPosition: string;
}) => {
  return (
    <CountBadgeElementWrapper topPosition={topPosition} leftPosition={leftPosition}>
      {count}
    </CountBadgeElementWrapper>
  );
};

const CountBadgeElementWrapper = styled.div<{ topPosition: string; leftPosition: string }>`
  position: absolute;
  top: ${(props) => props.topPosition};
  right: ${(props) => props.leftPosition};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #0066ff;

  font-size: 13px;
  color: #fff;
`;

export default CountBadgeElement;
