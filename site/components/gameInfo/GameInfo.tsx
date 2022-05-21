import styled from "styled-components";

import Colors from "../../styles/colors";
import { GameDetails } from "./GameDetails";
import { GameImage } from "./GameImage";
import { SeasonSaleProbabilityPhrase } from "./SeasonSaleProbabilityPhrase";

export interface GameInfoProps {
  name: string;
  developer: string[];
  publisher: string[];
  releaseDate: string;
  imageUrl: string;
  seasonSaleCombo: string;
  nextSeasonSaleKey: string;
}

export function GameInfo(props: GameInfoProps) {
  const { name, developer, publisher, releaseDate, imageUrl, seasonSaleCombo, nextSeasonSaleKey } = props;

  return (
    <StyledRoot>
      <GameImage imageUrl={imageUrl} />
      <SeasonSaleProbabilityPhrase seasonSaleCombo={seasonSaleCombo} nextSeasonSaleKey={nextSeasonSaleKey} />
      <GameDetails name={name} developer={developer} publisher={publisher} releaseDate={releaseDate} />
    </StyledRoot>
  );
}

const StyledRoot = styled.section`
  background-color: ${Colors.Background};
`;
