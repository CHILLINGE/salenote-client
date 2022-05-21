import { sleep } from "../../utils/timing";
import { GameGateway, GameInfoInput, GamePriceHistoryInput } from "./type";

export function createMockGameGateway(): GameGateway {
  return {
    async getGameInfo(data: GameInfoInput) {
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
    async getGamePriceHistory(data: GamePriceHistoryInput) {
      await sleep(200);
      const gamePriceHistory = [
        {
          zonedDateTime: "2022-03-12T15:06:07Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 1050000,
          discountPercent: 0,
        },
        {
          zonedDateTime: "2020-04-08T17:01:55Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 210000,
          discountPercent: 80,
        },
        {
          zonedDateTime: "2020-04-08T17:01:55Z",
          currency: "KRW",
          initialPrice: 1050000,
          finalPrice: 1050000,
          discountPercent: 0,
        },
      ];

      const calcAvgDiscountRate = () => {
        return Math.floor(
          gamePriceHistory.reduce((prev, cur) => prev + cur.discountPercent, 0) / gamePriceHistory.length,
        );
      };

      return {
        data: {
          id: data.id,
          avgDiscountRate: calcAvgDiscountRate(),
          gamePriceHistory,
        },
      };
    },
  };
}
