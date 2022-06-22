import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

import { sleep } from "../../utils/timing";
import {
  GameGateway,
  GamePriceHistoryOutput,
  GameSeasonalDiscountInfoOutput,
  InputFormat,
  ResponseSeasonalDiscount,
} from "./type";

export function createMockGameGateway(): GameGateway {
  function transTimezone(time: string) {
    const date = new Date(time);
    const timeZone = "Asia/Seoul";
    const transTime = utcToZonedTime(date, timeZone);
    return transTime;
  }

  return {
    async getGameInfo(data: InputFormat) {
      await sleep(200);
      return {
        data: {
          id: data.id,
          name: "Ricochet",
          headerImage: "https://cdn.akamai.steamstatic.com/steam/apps/60/header.jpg?t=1599518374",
          developers: ["Valve"],
          publishers: ["Valve"],
          releaseDate: "2000-10-31T15:00:00Z",
          currency: "KRW",
          initialPrice: 550000,
          finalPrice: 550000,
          discountPercent: 0,
          storeLink: "https://store.steampowered.com/app/60",
        },
      };
    },
    async getGamePriceHistory(data: InputFormat): Promise<GamePriceHistoryOutput> {
      await sleep(200);
      const res = [
        {
          zonedDateTime: "2022-04-12T15:06:07Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 1050000,
          discountPercent: 0,
        },
        {
          zonedDateTime: "2021-12-31T15:06:07Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 70000,
          discountPercent: 90,
        },
        {
          zonedDateTime: "2021-11-24T15:06:07Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 1050000,
          discountPercent: 80,
        },
        {
          zonedDateTime: "2021-10-28T15:06:07Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 1000000,
          discountPercent: 70,
        },
        {
          zonedDateTime: "2021-06-24T15:06:07Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 80000,
          discountPercent: 60,
        },
        {
          zonedDateTime: "2020-12-23T17:01:55Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 210000,
          discountPercent: 50,
        },
        {
          zonedDateTime: "2020-11-30T09:01:55Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 700000,
          discountPercent: 40,
        },
        {
          zonedDateTime: "2020-10-29T17:01:55Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 1000000,
          discountPercent: 10,
        },
        {
          zonedDateTime: "2020-06-30T17:01:55Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 900000,
          discountPercent: 20,
        },
        {
          zonedDateTime: "2020-01-23T17:01:55Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 1000000,
          discountPercent: 10,
        },
      ];

      const gamePriceHistoryList = res.map((priceHistory) => {
        const date = transTimezone(priceHistory.zonedDateTime);

        return {
          date,
          year: String(format(date, "yyyy")),
          currency: priceHistory.currency,
          initialPrice: priceHistory.initialPrice,
          finalPrice: priceHistory.finalPrice,
          discountPercent: priceHistory.discountPercent,
        };
      });

      return {
        data: {
          id: data.id,
          gamePriceHistoryList,
        },
      };
    },
    async getSeasonalDiscountList(data: InputFormat): Promise<GameSeasonalDiscountInfoOutput> {
      await sleep(3);
      const response = {
        code: "0000",
        message: "Success.",
        data: {
          seasonSaleList: [
            {
              id: "1",
              name: "Winter Sale 2021",
              key: "winter",
              year: 2021,
              startDate: "2021-12-22",
              endDate: "2022-01-05",
            },
            {
              id: "2",
              name: "Autumn Sale 2021",
              key: "autumn",
              year: 2021,
              startDate: "2021-11-24",
              endDate: "2021-12-01",
            },
            {
              id: "3",
              name: "Halloween Sale 2021",
              key: "halloween",
              year: 2021,
              startDate: "2021-10-28",
              endDate: "2021-11-01",
            },
            {
              id: "4",
              name: "Summer Sale 2021",
              key: "summer",
              year: 2021,
              startDate: "2021-06-24",
              endDate: "2021-07-08",
            },
            {
              id: "5",
              name: "Lunar New Year Sale 2021",
              key: "lunar",
              year: 2021,
              startDate: "2021-02-11",
              endDate: "2021-02-15",
            },
            {
              id: "6",
              name: "Winter Sale 2020",
              key: "winter",
              year: 2020,
              startDate: "2020-12-22",
              endDate: "2021-01-05",
            },
            {
              id: "7",
              name: "Autumn Sale 2020",
              key: "autumn",
              year: 2020,
              startDate: "2020-11-25",
              endDate: "2020-12-01",
            },
            {
              id: "8",
              name: "Halloween Sale 2020",
              key: "halloween",
              year: 2020,
              startDate: "2020-10-29",
              endDate: "2020-11-02",
            },
            {
              id: "9",
              name: "Summer Sale 2020",
              key: "summer",
              year: 2020,
              startDate: "2020-06-25",
              endDate: "2020-07-09",
            },
            {
              id: "10",
              name: "Lunar New Year Sale 2020",
              key: "lunar",
              year: 2020,
              startDate: "2020-01-23",
              endDate: "2020-01-27",
            },
          ],
        },
      };

      const seasonalDiscountList = response.data.seasonSaleList.map((info: ResponseSeasonalDiscount) => ({
        key: info.key,
        year: info.year,
        startDate: info.startDate,
        endDate: info.endDate,
      }));

      return {
        id: data.id,
        seasonalDiscountList,
      };
    },
  };
}
