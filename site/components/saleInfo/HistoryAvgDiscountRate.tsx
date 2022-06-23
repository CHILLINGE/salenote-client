import { useEffect, useState } from "react";
import styled from "styled-components";

import { DataFormat, decodeHistoryAvgDRate } from "../charts/formatting/FormatHistoryAvgDRate";
import { HistoryAvgDiscountRateChart } from "../charts/HistoryAvgDiscountRateChart";
import { CommonAccordion } from "../common/CommonAccordion";
import { usePriceHistory } from "./usePriceHistory";

export function HistoryAvgDiscount() {
  const { getPriceHistory, responseData } = usePriceHistory();
  const [decodeData, setDecodeData] = useState<DataFormat[]>([]);
  const [decodeKeys, setDecodeKeys] = useState<string[]>([]);

  const accordionContent = {
    summary: "과거의 할인율",
    description: "게임 출시 이후부터 현재 시점까지 진행되었던 할인율들을 확인할 수 있어요.",
  };

  useEffect(() => {
    getPriceHistory("1");
  }, []);

  useEffect(() => {
    const { data, keys } = decodeHistoryAvgDRate(responseData);
    setDecodeData(data);
    setDecodeKeys(keys);
  }, [responseData]);

  return (
    <>
      <CommonAccordion summary={accordionContent.summary} description={accordionContent.description} />
      <ChartWrapper>
        <HistoryAvgDiscountRateChart data={decodeData} keys={decodeKeys} />
      </ChartWrapper>
    </>
  );
}

const ChartWrapper = styled.section`
  margin: 0 1.2rem 0 1.6rem;
`;
