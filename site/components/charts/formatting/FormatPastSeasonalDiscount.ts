import { utcToZonedTime } from "date-fns-tz";

import { GamePriceHistory, GameSeasonalDiscountInfo } from "../../../gateway/gameInfo/type";

export function decodePastSeasonalDiscount(
  gamePriceHistory: GamePriceHistory[],
  seasonalDiscountList: GameSeasonalDiscountInfo[],
) {
  const list = formattingYearSeasonList(seasonalDiscountList);
  return {
    seasonList: list.seasonList,
    yearList: list.yearList,
    data: formattingData(gamePriceHistory, seasonalDiscountList),
  };
}

function transTimezone(time: string) {
  const date = new Date(time);
  const timeZone = "Asia/Seoul";
  const transTime = utcToZonedTime(date, timeZone);
  return transTime;
}

function initYearGroupedList(list: number[], value: IndexStringObj) {
  const obj: IndexNumberObj = {};
  list.forEach((key: number) => {
    obj[key] = { ...value };
  });

  return obj;
}

function initSaleInfo(list: string[]) {
  const obj: IndexStringObj = {};
  list.forEach((saleName) => (obj[saleName] = "."));
  return obj;
}

function formattingYearSeasonList(init: GameSeasonalDiscountInfo[]) {
  const yearList = new Set<number>();
  const seasonList = new Set<string>();
  init.forEach((res) => {
    yearList.add(res.year);
    seasonList.add(res.key);
  });

  return { yearList: Array.from(yearList), seasonList: Array.from(seasonList) };
}

function initFormattingData(init: GameSeasonalDiscountInfo[]) {
  const { yearList, seasonList } = formattingYearSeasonList(init);
  const value = initSaleInfo(seasonList);
  return initYearGroupedList(yearList, value);
}

// function isSameDate(date1: Date, date2: Date) {
//   return (
//     date2.getFullYear() === date2.getFullYear() &&
//     date2.getMonth() === date2.getMonth() &&
//     date2.getDate() === date2.getDate()
//   );
// }

function doesRangeOverlap(comparedDate: Date, startDate: Date, endDate: Date) {
  return startDate <= comparedDate && comparedDate <= endDate ? true : false;
}

function findDiscountPercent(gamePriceHistory: GamePriceHistory[], discountInfo: GameSeasonalDiscountInfo) {
  const discountStartDate = transTimezone(discountInfo.startDate);
  const discountEndDate = transTimezone(discountInfo.endDate);

  for (const gamePrice of gamePriceHistory) {
    const saleDate = transTimezone(String(gamePrice.date));
    if (doesRangeOverlap(saleDate, discountStartDate, discountEndDate)) {
      return gamePrice.discountPercent;
    }
  }

  return 0;
}

function insertMatchSeasonSale(init: IndexNumberObj, year: number, saleName: string, salePercentage: number) {
  init[year][saleName] = `-${salePercentage}%`;
}

function returnFormatting(init: IndexNumberObj) {
  const obj: DataFormat = {};
  Object.keys(init).forEach((key) => {
    const keyStringToNumber = Number(key);
    obj[keyStringToNumber] = Object.keys(init[keyStringToNumber]).map(
      (middleKey) => init[keyStringToNumber][middleKey],
    );
  });

  return obj;
}

function formattingData(priceHistoryList: GamePriceHistory[], seasonalDiscountList: GameSeasonalDiscountInfo[]) {
  const init = initFormattingData(seasonalDiscountList);

  seasonalDiscountList.forEach((discountInfo) => {
    const discountPercent = findDiscountPercent(priceHistoryList, discountInfo);
    discountPercent !== 0 && insertMatchSeasonSale(init, discountInfo.year, discountInfo.key, discountPercent);
  });

  return returnFormatting(init);
}

interface IndexStringObj {
  [key: string]: string;
}

interface IndexNumberObj {
  [key: number]: IndexStringObj;
}

export interface DataFormat {
  [key: number]: string[];
}
