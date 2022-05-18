import { ReactNode } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";

import Colors from "../../styles/colors";

export interface CommonAccordionProps {
  summary: string;
  description: ReactNode;
}

export function CommonAccordion({ summary, description }: CommonAccordionProps) {
  return (
    <StyledCommonAccordion>
      <SummaryWrapper>
        <Summary>{summary}</Summary>
        <MdKeyboardArrowDown fontSize={24} />
      </SummaryWrapper>
      <Description>{description}</Description>
    </StyledCommonAccordion>
  );
}

const StyledCommonAccordion = styled.details`
  width: 100%;
  padding: 1.6rem 0;
  cursor: pointer;
`;

const SummaryWrapper = styled.summary`
  /* height: 3.1rem; */
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.9rem;
  list-style: none;
`;

const Summary = styled.h3`
  font-size: 1.5rem;
`;

const Description = styled.p`
  display: flex;
  font-size: 1.3rem;
  line-height: 140%;
  background-color: ${Colors.Gray1};
  padding: 1rem 1.1rem 1rem 1.2rem;
`;
