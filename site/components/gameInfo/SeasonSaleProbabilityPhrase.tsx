import styled from "styled-components";

import Colors from "../../styles/colors";

export interface SeasonSaleProbabilityPhraseProps {
  seasonSaleCombo: string;
  nextSeasonSaleKey: string;
}

interface ObjIndex {
  [key: string]: string;
}

const season: ObjIndex = {
  lunarNewYear: "설날",
  summer: "여름",
  autumn: "가을",
  halloween: "할로윈",
  winter: "겨울",
};

const probability: ObjIndex = {
  아주높음: "아주 높아",
  높음: "높아",
  보통: "보통이에",
  낮음: "낮아",
};

export function SeasonSaleProbabilityPhrase({ seasonSaleCombo, nextSeasonSaleKey }: SeasonSaleProbabilityPhraseProps) {
  const formattingPhrase = () => {
    return `다가오는 ${season[nextSeasonSaleKey]} 할인에 참여할 확률이 ${probability[seasonSaleCombo]}요!`;
  };

  return <StyledProbabilityPhrase>{formattingPhrase()}</StyledProbabilityPhrase>;
}

const StyledProbabilityPhrase = styled.text`
  margin-top: 2rem;
  margin-left: 1.6rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.02em;
  color: ${Colors.Green};
`;
