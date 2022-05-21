import { CommonAccordion } from "../common/CommonAccordion";
import { ParticipationProbability } from "./ParticipationProbability";

export interface SeasonSaleProbabilityProps {
  seasonSaleCombo: string;
  nextSeasonName: string;
}

export function SeasonSaleProbability({ seasonSaleCombo, nextSeasonName }: SeasonSaleProbabilityProps) {
  const commonAccordionProps = {
    summary: "다가오는 계절 할인에 참여할 확률",
    description: "STEAM에서 진행하는 계절 할인은 설날, 여름, 가을, 할로윈, 겨울로 총 5번의 계절 할인이 있어요. ",
  };
  const figureNameList = ["낮음", "보통", "높음", "아주높음"];

  return (
    <>
      <CommonAccordion {...commonAccordionProps} />
      <ParticipationProbability
        figureNameList={figureNameList}
        seasonSaleCombo={seasonSaleCombo}
        nextSeasonName={nextSeasonName}
      />
    </>
  );
}
