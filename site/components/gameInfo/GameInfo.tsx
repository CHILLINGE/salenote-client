import styled from "styled-components";

import Colors from "../../styles/colors";
import { GameDetails } from "./GameDetails";
import { GameImage } from "./GameImage";

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
      <GameImage imageUrl={imageUrl} />
      <GameDetails name={name} developer={developer} publisher={publisher} releaseDate={releaseDate} />
    </StyledRoot>
  );
}

const StyledRoot = styled.section`
  background-color: ${Colors.Background};
`;
