import styled from "styled-components";

export interface GameImageProps {
  imageUrl: string;
}

export function GameImage({ imageUrl }: GameImageProps) {
  return (
    <ThumbnailWrapper>
      <Thumbnail>
        <Image src={imageUrl} alt="gameImage" />
      </Thumbnail>
    </ThumbnailWrapper>
  );
}

const ThumbnailWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
`;

const Thumbnail = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
