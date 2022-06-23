import { useEffect } from "react";
import styled from "styled-components";

import { PriceHistoryChart } from "../charts/PriceHistoryChart";
import { PriceHistoryChartDropdown } from "../charts/PriceHistoryChartDropdown";
import { CommonAccordion } from "../common/CommonAccordion";
import { usePriceHistory } from "./usePriceHistory";

export function PriceHistory() {
  const { getPriceHistory, data, isLoading, year, changeYear, yearList } = usePriceHistory();

  const accordionContent = {
    summary: "과거의 할인기록",
    description: "게임 출시 이후부터 현재 시점까지 진행되었던 할인기록을 정가, 할인율, 할인가로 확인할 수 있어요.",
  };

  useEffect(() => {
    getPriceHistory("1");
  }, []);

  return (
    <StyledPriceHistory>
      {isLoading ? (
        <></>
      ) : (
        <>
          <CommonAccordion {...accordionContent} />
          <DropdownWrapper>
            <PriceHistoryChartDropdown year={year} yearList={yearList} changeYear={changeYear} />
          </DropdownWrapper>
          <ChartWrapper>
            <PriceHistoryChart data={data} />
          </ChartWrapper>
        </>
      )}
    </StyledPriceHistory>
  );
}

const StyledPriceHistory = styled.section``;

const DropdownWrapper = styled.div`
  position: relative;
  margin-left: 1.6rem;
`;

const ChartWrapper = styled.div`
  margin-left: 1.6rem;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
