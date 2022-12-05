import styled from 'styled-components';
import Image from 'next/image';

const ImageElement = ({ imgSrc, imgAlt }: { imgSrc: string; imgAlt: string }) => {
  return (
    <ImageElementWrapper>
      <Image src={imgSrc} alt={imgAlt} fill />
    </ImageElementWrapper>
  );
};

const ImageElementWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
  }
`;

export default ImageElement;
