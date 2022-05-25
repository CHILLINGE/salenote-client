import { MdFastRewind } from "react-icons/md";
import styled, { css } from "styled-components";

import Colors from "../../styles/colors";

export interface FigureProps {
  activation: boolean;
  figureName: string;
}

export function Figure({ activation, figureName }: FigureProps) {
  return (
    <StyledRoot>
      {activation ? (
        <>
          <MdFastRewind size={14} color={Colors.Green} />
          <CircleWrapper>
            <OutCircle></OutCircle>
            <Circle activation={activation}></Circle>
          </CircleWrapper>
        </>
      ) : (
        <Circle activation={activation}></Circle>
      )}

      <FigureName activation={activation}>{figureName}</FigureName>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  height: 4.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  & > svg {
    transform: rotate(-90deg);
  }
`;

const CircleWrapper = styled.div`
  position: relative;
`;

const OutCircle = styled.div`
  position: absolute;
  left: -0.2rem;
  top: 0.2rem;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 5rem;
  background-color: ${Colors.Green};
  opacity: 50%;
`;

const Circle = styled.div<{ activation: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: 5rem;
  background-color: ${Colors.Disabled};

  ${({ activation }) =>
    activation &&
    css`
      margin-top: 0.4rem;
      background-color: ${Colors.Green};
    `};
`;

const FigureName = styled.div<{ activation: boolean }>`
  font-weight: 400;
  font-size: 1.3rem;
  letter-spacing: 0.02rem;
  color: ${({ activation }) => (activation ? Colors.Green : Colors.Disabled)};
  margin-top: 0.6rem;
`;
