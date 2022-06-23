import { GamePriceHistory } from "../../../gateway/gameInfo/type";
import Colors from "../../../styles/colors";
import { HistoryAvgDProps } from "../HistoryAvgDiscountRateChart";

export const decodeHistoryAvgDRate = (init: GamePriceHistory[]): HistoryAvgDProps => ({
  data: chartDataFormatting(init),
  keys: ["percentageCnt"],
});

const checkOverlapAndCount = (obj: HistoryAvgDRate, percent: number) => {
  if (percent === 0) return;
  return obj[percent] ? obj[percent]++ : (obj[percent] = 1);
};

const groupedDiscountPercent = (init: GamePriceHistory[]): HistoryAvgDRate => {
  const discountPercent: HistoryAvgDRate = {};

  init.forEach((historyAvgDRate: GamePriceHistory) =>
    checkOverlapAndCount(discountPercent, historyAvgDRate.discountPercent),
  );

  return discountPercent;
};

const findMaxPercentCnt = (percentObj: HistoryAvgDRate) => {
  const percentList = Object.values(percentObj);
  return Math.max(...percentList);
};

const chartDataFormatting = (init: GamePriceHistory[]): DataFormat[] => {
  const discountPercentObj = groupedDiscountPercent(init);
  const MaxPercentCnt = findMaxPercentCnt(discountPercentObj);

  const compare = (a: string, b: string) => {
    return Number(a) - Number(b);
  };

  return Object.keys(discountPercentObj)
    .sort(compare)
    .map((key) => ({
      percentage: `-${key}%`,
      percentageCnt: discountPercentObj[Number(key)],
      percentageCntColor: MaxPercentCnt === discountPercentObj[Number(key)] ? Colors.Green : Colors.White,
    }));
};

export interface DataFormat {
  percentage: string;
  percentageCnt: number;
  percentageCntColor: string;
  [key: string]: string | number;
}

interface HistoryAvgDRate {
  [key: number]: number;
}
