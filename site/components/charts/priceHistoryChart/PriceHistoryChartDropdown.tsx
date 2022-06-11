import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import styled, { css } from "styled-components";

import Colors from "../../../styles/colors";

export interface DropdownProps {
  year: string;
  yearList: string[];
  changeYear: (year: string) => void;
}

export function PriceHistoryChartDropdown({ year, yearList, changeYear }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const handleListClick = (year: string) => {
    changeYear(year);
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown>
      <SelectedYear onClick={handleOpenClick} isOpen={isOpen}>
        <YearName>{year}</YearName>
        <MdArrowDropDown fontSize={15} color={isOpen ? Colors.Blue : Colors.White} />
      </SelectedYear>
      {isOpen ? (
        <DropdownList isOpen={isOpen}>
          {yearList.map((year) => (
            <Content onClick={() => handleListClick(year)}>{year}</Content>
          ))}
        </DropdownList>
      ) : (
        <></>
      )}
    </Dropdown>
  );
}

const Dropdown = styled.article`
  position: absolute;
  top: 1.6rem;
  left: 1.4rem;
  z-index: 3;
  cursor: pointer;
`;

const SelectedYear = styled.div<{ isOpen: boolean }>`
  width: 5.9rem;
  height: 2.6rem;
  padding: 0.5rem 0 0.6rem 0.8rem;
  border: 1px solid ${Colors.White};
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: ${Colors.ContentBackground};

  ${({ isOpen }) =>
    isOpen &&
    css`
      border: 1px solid ${Colors.Blue};
    `}
`;

const YearName = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  letter-spacing: -0.02rem;
  color: ${Colors.White};
  margin-right: 0.3rem;
`;

const DropdownList = styled.ul<{ isOpen: boolean }>``;

const Content = styled.li`
  padding: 0.5rem 0 0.6rem 0.8rem;
  border: 1px solid ${Colors.Disabled};
  border-top: none;
  font-size: 1.2rem;
  color: ${Colors.White};
  background-color: ${Colors.ContentBackground};
`;
