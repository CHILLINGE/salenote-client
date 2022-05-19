import { sleep } from "../../utils/timing";
import { GameGateway, GameInfoInput } from "./type";

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
  };
}
