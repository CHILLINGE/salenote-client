import styled from "styled-components";

export interface TopImageProps {
  imageUrl: string;
}

export function TopImage({ imageUrl }: TopImageProps) {
  return (
    <ThumbnailWrapper>
      <Thumbnail>
        <GameImage src={imageUrl} alt="gameImage" />
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

const GameImage = styled.img`
  width: 100%;
  height: auto;
`;
