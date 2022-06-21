import { useEffect, useState } from "react";
import styled from "styled-components";

import { useAPI } from "../../gateway";
import { GameSeasonalDiscountInfo } from "../../gateway/gameInfo/type";
import { CommonAccordion } from "../common/CommonAccordion";
import { DataFormat, decodePastSeasonalDiscount } from "./formatting/FormatPastSeasonalDiscount";
import { PastDiscountTable } from "./PastDiscountTable";
import { usePriceHistory } from "./usePriceHistory";

interface formatedData {
  seasonList: string[];
  yearList: number[];
  data: DataFormat;
}

export function SeasonalDiscount() {
  const api = useAPI();
  const { getPriceHistory, responseData } = usePriceHistory();
  const [seasonalDiscountList, setSeasonalDiscountList] = useState<GameSeasonalDiscountInfo[]>([]);
  const [formatedData, setFormatedData] = useState<formatedData>();
  const accordionContent = {
    summary: "과거의 계절할인",
    description: "게임 출시 이후부터 현재 시점까지 진행되었던 계절별 할인내역을 확인할 수 있어요.",
  };

  async function getSeasonalDiscountList(id: string) {
    const res = api.game.getSeasonalDiscountList({ id });
    setSeasonalDiscountList((await res).seasonalDiscountList);
  }

  useEffect(() => {
    getPriceHistory("1");
    getSeasonalDiscountList("1");
  }, []);

  useEffect(() => {
    const decodedData = decodePastSeasonalDiscount(responseData, seasonalDiscountList);
    setFormatedData(decodedData);
  }, [responseData, seasonalDiscountList]);

  return (
    <>
      <CommonAccordion summary={accordionContent.summary} description={accordionContent.description} />
      <TableWrapper>
        <PastDiscountTable
          saleNameList={formatedData?.seasonList}
          saleYearList={formatedData?.yearList}
          data={formatedData?.data}
        />
      </TableWrapper>
    </>
  );
}

const TableWrapper = styled.section`
  margin: 0 1.2rem 0 1.6rem;
`;
