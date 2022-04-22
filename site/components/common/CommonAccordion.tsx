import Image from "next/image";
import styled from "styled-components";

import Colors from "../../styles/colors";

export interface CommonToggleProps {
  summary: string;
  description: string;
}

export function CommonToggle({ summary, description }: CommonToggleProps) {
  return (
    <StyledCommonToggle>
      <StyledSummary>
        <h3>{summary}</h3>
        <Image
          src="/site/public/assets/icons/commonToggleArrowIcon.svg"
          alt="commonToggleIcon"
          width={24}
          height={24}
          quality={100}
        />
      </StyledSummary>
      <p>{description}</p>
    </StyledCommonToggle>
  );
}

const StyledCommonToggle = styled.details`
  width: 100%;
  padding: 1.6rem 0;
  cursor: pointer;

  p {
    display: flex;
    font-size: 1.3rem;
    line-height: 140%;
    background-color: ${Colors.Gray1};
    padding: 1rem 1.1rem 1rem 1.2rem;
  }
`;

const StyledSummary = styled.summary`
  height: 3.1rem;

  display: flex;
  justify-content: space-between;
  padding-bottom: 0.9rem;
  font-size: 1.5rem;
  line-height: 2.2rem;
  list-style: none;
`;
