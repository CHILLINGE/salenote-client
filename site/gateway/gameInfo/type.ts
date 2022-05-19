export interface GameGateway {
  getGameInfo(data: GameInfoInput): Promise<GameInfoOutput>;
  getGamePriceHistory(data: GamePriceHistoryInput): Promise<GamePriceHistoryOutput>;
}

export interface GameInfoInput {
  id: string;
}

export interface GameInfoOutput {
  data: {
    id: string;
    name: string;
    headerImage: string;
    developers: string[];
    publishers: string[];
    releaseDate: string;
    currency: string;
    initialPrice: number;
    finalPrice: number;
    discountPercent: number;
    storeLink: string;
  };
}

export interface GamePriceHistoryInput {
  id: string;
}

export interface GamePriceHistoryOutput {
  data: {
    id: string;
    gamePriceHistory: GamePriceHistory[];
  };
}

export interface GamePriceHistory {
  zonedDateTime: string;
  currency: string;
  initialPrice: number;
  finalPrice: number;
  discountPercent: number;
}
