import styled from "styled-components";

import Colors from "../../styles/colors";

export interface AvgDiscountRateProps {
  avgDiscountRate: number;
}

export function AvgDiscountRate({ avgDiscountRate }: AvgDiscountRateProps) {
  return (
    <StyledAvgDisRate>
      <Title>평균 할인율</Title>
      <DisRate>{avgDiscountRate}%</DisRate>
    </StyledAvgDisRate>
  );
}

const StyledAvgDisRate = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.6rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.2rem;
  letter-spacing: -0.02em;
  color: white;
  margin: 0;
`;

const DisRate = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.7rem;
  color: ${Colors.Green};
`;
