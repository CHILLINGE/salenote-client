import styled from "styled-components";

import Colors from "../../styles/colors";
import { TopContents } from "./topContents";
import { TopImage } from "./TopImage";

export interface GameInfoProps {
  name: string;
  developer: string[];
  publisher: string[];
  releaseDate: string;
  imageUrl: string;
}

export function GameInfo({ name, developer, publisher, releaseDate, imageUrl }: GameInfoProps) {
  return (
    <StyledRoot>
      <TopImage imageUrl={imageUrl} />
      <TopContents name={name} developer={developer} publisher={publisher} releaseDate={releaseDate} />
    </StyledRoot>
  );
}

const StyledRoot = styled.section`
  background-color: ${Colors.Background};
`;
