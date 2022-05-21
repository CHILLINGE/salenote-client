import styled from "styled-components";

import Colors from "../../styles/colors";
import { Figure } from "./Figure";

export interface ParticipationProbabilityProps {
  figureNameList: string[];
  seasonSaleCombo: string;
  nextSeasonName: string;
}

export function ParticipationProbability({
  figureNameList,
  seasonSaleCombo,
  nextSeasonName,
}: ParticipationProbabilityProps) {
  return (
    <StyledRoot>
      <TitleWrapper>
        <Label>예정</Label>
        <Title>{nextSeasonName}</Title>
      </TitleWrapper>
      <FigureWrapper>
        {figureNameList.map((figureName, index) => (
          <Figure key={index} activation={figureName === seasonSaleCombo} figureName={figureName} />
        ))}
      </FigureWrapper>
      <LineWrapper>
        <Line></Line>
      </LineWrapper>
    </StyledRoot>
  );
}

const StyledRoot = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 13rem;
  background-color: ${Colors.ContentBackground};
`;

const TitleWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 2rem 0 2.2rem;
`;

const Label = styled.aside`
  width: 3.4rem;
  height: 2.1rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: ${Colors.Blue};
  text-align: center;
  margin-right: 1rem;
  border: 1px solid ${Colors.Blue};
`;

const Title = styled.h4`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: ${Colors.White};
`;

const FigureWrapper = styled.section`
  padding: 0 2.7rem;
  display: flex;
  justify-content: space-between;
  z-index: 3;
`;

const LineWrapper = styled.div`
  position: absolute;
  bottom: 4rem;
  width: 100%;
`;

const Line = styled.div`
  height: 1px;
  margin: 0 4.7rem 0 4rem;
  background-color: ${Colors.Disabled};
  z-index: 1;
`;
