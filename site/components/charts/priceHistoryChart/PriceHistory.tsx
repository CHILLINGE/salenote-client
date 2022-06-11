import { useEffect } from "react";
import styled from "styled-components";

import { CommonAccordion } from "../../common/CommonAccordion";
import { usePriceHistory } from "../usePriceHistory";
import { PriceHistoryChart } from "./PriceHistoryChart";
import { PriceHistoryChartDropdown } from "./PriceHistoryChartDropdown";

export function PriceHistory() {
  const { getPriceHistory, data, isLoading, year, changeYear, yearList } = usePriceHistory();

  const accordionContent = {
    summary: "과거의 할인기록",
    description: "게임 출시 이후부터 현재 시점까지 진행되었던 할인기록을 정가, 할인율, 할인가로 확인할 수 있어요.",
  };

  useEffect(() => {
    getPriceHistory("1");
  }, []);

  useEffect(() => {
    //여기서 fetchData를 해줘야하나?
  }, [data]);

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
          <PriceHistoryChart data={data} />
        </>
      )}
    </StyledPriceHistory>
  );
}

const StyledPriceHistory = styled.section``;

const DropdownWrapper = styled.div`
  position: relative;
`;
