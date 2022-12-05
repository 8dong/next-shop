import styled from 'styled-components';

const SkeletonElement = () => {
  return <SkeletonElementWrapper></SkeletonElementWrapper>;
};

const SkeletonElementWrapper = styled.div`
  width: 100%;
  height: 100%;

  animation: skeleton-gradient 1.8s infinite ease-in-out;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

export default SkeletonElement;
