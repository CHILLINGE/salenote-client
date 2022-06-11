import Colors from "../../../styles/colors";
import { HistoryAvgDProps } from "../HistoryAvgDiscountRateChart";

export interface HistoryAvgDRateResponse {
  zonedDateTime: string;
  currency: string;
  initialPrice: number;
  finalPrice: number;
  discountPercent: number;
}

interface HistoryAvgDRate {
  [key: number]: number;
}

export const decodeHistoryAvgDRate = (init: HistoryAvgDRateResponse[]): HistoryAvgDProps => ({
  data: chartDataFormatting(init),
  keys: ["percentageCnt"],
});

const checkOverlapAndCnt = (obj: HistoryAvgDRate, percent: number) => {
  if (percent === 0) return;
  return obj[percent] ? obj[percent]++ : (obj[percent] = 1);
};

const groupedDiscountPercent = (init: HistoryAvgDRateResponse[]) => {
  const discountPercent: HistoryAvgDRate = {};

  init.forEach((historyAvgDRate: HistoryAvgDRateResponse) =>
    checkOverlapAndCnt(discountPercent, historyAvgDRate.discountPercent),
  );

  return discountPercent;
};

const findMaxPercentCnt = (percentObj: HistoryAvgDRate) => {
  const percentList = Object.values(percentObj);
  return Math.max(...percentList);
};

const chartDataFormatting = (init: HistoryAvgDRateResponse[]) => {
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
