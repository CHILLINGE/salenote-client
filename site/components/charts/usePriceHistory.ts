import { useState } from "react";

import { useAPI } from "../../gateway";
import { GamePriceHistory } from "../../gateway/gameInfo/type";
import Colors from "../../styles/colors";

export function usePriceHistory() {
  const api = useAPI();
  const [year, setYear] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [yearList, setYearList] = useState<string[]>([]);
  const [data, setData] = useState<chartDataFormat[]>([]);
  const [yearFilteredData, setYearFilteredData] = useState<GamePriceHistory[]>([]);
  const [responseData, setResponseData] = useState<GamePriceHistory[]>([]);
  const [avgDiscountRate, setAvgDiscountRate] = useState<number>();

  async function getPriceHistory(id: string) {
    await gamePriceAPI(id);
  }

  async function gamePriceAPI(id: string) {
    const res = await api.game.getGamePriceHistory({ id });
    const formatedResult = res.data.gamePriceHistoryList;

    setAvgDiscountRate(calcAvgDiscountRate(res.data.gamePriceHistoryList));

    //여러번 api 호출을 하지 않기 위해 responseData 설정 -> 이거 그냥 상수 값으로 할까? state로 두지 않고
    setResponseData(formatedResult);
    //data를 year별로 분리
    formatDataByYear("2022", formatedResult);

    //현재 년도와 년도 리스트 생성
    makeYearList(formatedResult);
    setYear("2022");

    fetchData();
  }

  function fetchData() {
    setIsLoading(true);

    //차트 데이터 형식
    setData(decodePriceHistoryToChartData());
    setIsLoading(false);
  }

  function changeYear(selectedYear: string) {
    setYear(selectedYear);

    formatDataByYear(selectedYear, responseData);
    fetchData();
  }

  function formatDataByYear(selectedYear: string, formatedResult: GamePriceHistory[]) {
    const result = formatedResult.filter((data) => data.year === selectedYear);

    setYearFilteredData(result);
  }

  function calcAvgDiscountRate(res: GamePriceHistory[]) {
    return Math.floor(res.reduce((prev, cur) => prev + cur.discountPercent, 0) / res.length);
  }

  function makeYearList(formatedResult: GamePriceHistory[]) {
    const yearSet = new Set<string>();

    formatedResult.forEach((result) => yearSet.add(result.year));
    setYearList(Array.from(yearSet));
  }

  function formattingData() {
    return yearFilteredData.map((temp) => ({
      x: temp.date,
      y: temp.finalPrice,
    }));
  }

  function decodePriceHistoryToChartData() {
    return [
      {
        id: "priceHistory",
        color: Colors.Green,
        data: formattingData(),
      },
    ];
  }

  return {
    isLoading,
    getPriceHistory,
    year,
    changeYear,
    yearList,
    avgDiscountRate,
    data,
    responseData,
    yearFilteredData,
  };
}

interface chartDataFormat {
  id: string;
  color: Colors;
  data: Array<{ x: Date; y: number }>;
}
