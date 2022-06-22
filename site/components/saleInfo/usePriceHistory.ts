import { useEffect, useState } from "react";

import { useAPI } from "../../gateway";
import { GamePriceHistory } from "../../gateway/gameInfo/type";
import Colors from "../../styles/colors";

export function usePriceHistory() {
  const api = useAPI();
  const [year, setYear] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [yearList, setYearList] = useState<string[]>([]);
  const [data, setData] = useState<chartDataFormat[]>([]);
  const [filteredYearData, setFilteredYearData] = useState<GamePriceHistory[]>([]);
  const [responseData, setResponseData] = useState<GamePriceHistory[]>([]);
  const [avgDiscountRate, setAvgDiscountRate] = useState<number>();

  async function getPriceHistory(id: string) {
    await gamePriceAPI(id);
  }

  async function gamePriceAPI(id: string) {
    const res = await api.game.getGamePriceHistory({ id });
    const formatedResult = res.data.gamePriceHistoryList;

    setResponseData(formatedResult);

    setAvgDiscountRate(calcAvgDiscountRate(res.data.gamePriceHistoryList));

    //데이터에 포함된 년도 리스트 생성
    initYearList(formatedResult);
  }

  function fetchData() {
    setIsLoading(true);
    setData(decodePriceHistoryDataToChartData());
    setIsLoading(false);
  }

  function changeYear(selectedYear: string) {
    setYear(selectedYear);
  }

  function groupedByYearData(selectedYear: string, formatedResult: GamePriceHistory[]) {
    return formatedResult.filter((data) => data.year === selectedYear);
  }

  function calcAvgDiscountRate(res: GamePriceHistory[]) {
    return Math.floor(res.reduce((prev, cur) => prev + cur.discountPercent, 0) / res.length);
  }

  function initYearList(formatedResult: GamePriceHistory[]) {
    const yearSet = new Set<string>();

    formatedResult.forEach((result) => yearSet.add(result.year));

    const tempArr = Array.from(yearSet).sort((a, b) => Number(a) - Number(b));
    setYearList(tempArr);
    // setYear(Array.from(yearSet)[0]);
  }

  function initSetYear() {
    //최초 yearlist 생성시 가장 첫번째 값을 기본값으로 설정
    changeYear(yearList[0]);
  }

  function formattingChartData() {
    return filteredYearData.map((temp) => ({
      x: temp.date,
      y: temp.finalPrice,
    }));
  }

  function decodePriceHistoryDataToChartData() {
    return [
      {
        id: "priceHistory",
        color: Colors.Green,
        data: formattingChartData(),
      },
    ];
  }

  useEffect(() => {
    initSetYear();
  }, [yearList]);

  useEffect(() => {
    const result = groupedByYearData(year, responseData);
    setFilteredYearData(result);
  }, [year]);

  useEffect(() => {
    //year별로 다른 결과를 보여줘야하기 때문에 filter된 데이터가 나오면 이제 실제 차트에 적용될 데이터를 변경해서 전달해야한다.
    fetchData();
  }, [filteredYearData]);

  return {
    isLoading,
    getPriceHistory,
    fetchData,
    avgDiscountRate,
    responseData,
    data,
    changeYear,
    year,
    yearList,
    yearFilteredData: filteredYearData,
  };
}

interface chartDataFormat {
  id: string;
  color: Colors;
  data: Array<{ x: Date; y: number }>;
}
