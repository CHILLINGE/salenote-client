import { format, utcToZonedTime } from "date-fns-tz";
import { useState } from "react";

import { useAPI } from "../../gateway";
import { GamePriceHistory } from "../../gateway/gameInfo/type";

export function useChartData() {
  const api = useAPI();
  const [year, setYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<GamePriceHistoryList>([]);
  const [responseData, setResponseData] = useState<GamePriceHistoryList>([]);
  const [avgDiscountRate, setAvgDiscountRate] = useState<number>();

  async function getPriceHistory(id: string) {
    await gamePriceAPI(id);
  }

  async function gamePriceAPI(id: string) {
    setIsLoading(true);
    const res = await api.game.getGamePriceHistory({ id });

    const formatedResult = res.data.gamePriceHistoryList.map(gamePriceHistoryFormatting);

    setAvgDiscountRate(calcAvgDiscountRate(res.data.gamePriceHistoryList));
    setResponseData(formatedResult);
    setData(formatedResult);
    //year 분리
    formatDataByYear("2021");
    setIsLoading(false);
  }

  function gamePriceHistoryFormatting(priceHistory: GamePriceHistory) {
    const date = transTimezone(priceHistory.zonedDateTime);

    return {
      date,
      year: String(format(date, "yyyy")),
      currency: priceHistory.currency,
      initialPrice: priceHistory.initialPrice,
      finalPrice: priceHistory.finalPrice,
      discountPercent: priceHistory.discountPercent,
    };
  }

  function changeYear(year: string) {
    setYear(year);

    formatDataByYear(year);
  }

  function formatDataByYear(year: string) {
    responseData.filter((data) => data.year === year);
  }

  const transTimezone = (time: string) => {
    const date = new Date(time);
    const timeZone = "Asia/Seoul";
    const transTime = utcToZonedTime(date, timeZone);
    return transTime;
  };

  const calcAvgDiscountRate = (res: GamePriceHistory[]) => {
    return Math.floor(res.reduce((prev, cur) => prev + cur.discountPercent, 0) / res.length);
  };

  return {
    isLoading,
    getPriceHistory,
    year,
    changeYear,
    avgDiscountRate,
    data,
  };
}
type GamePriceHistoryList = Array<{
  date: Date;
  year: string;
  currency: string;
  initialPrice: number;
  finalPrice: number;
  discountPercent: number;
}>;
