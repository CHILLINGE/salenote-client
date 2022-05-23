import { ReactNode, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled, { css } from "styled-components";

import Colors from "../../styles/colors";

export interface CommonAccordionProps {
  summary: string;
  description: ReactNode;
}

export function CommonAccordion({ summary, description }: CommonAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledCommonAccordion>
      <SummaryWrapper onClick={handleClick} isOpen={isOpen}>
        <Summary>{summary}</Summary>
        <MdKeyboardArrowDown fontSize={24} color="white" />
      </SummaryWrapper>
      <Description isOpen={isOpen}>{description}</Description>
    </StyledCommonAccordion>
  );
}

const StyledCommonAccordion = styled.section`
  width: 100%;
  margin-bottom: 1.4rem;
`;

const SummaryWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.2rem 0 1.6rem;
  list-style: none;
  cursor: pointer;

  & > svg {
    transition: all ease 0.3s 0.1s;

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

const Summary = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  margin: 0;
`;

const Description = styled.p<{ isOpen: boolean }>`
  display: none;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 140%;
  background-color: ${Colors.TextBackground};
  color: white;
  border: 1px solid ${Colors.Blue};
  padding: 1rem 1.1rem 1rem 1.2rem;
  margin: 1rem 1.6rem 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
    `};
`;
