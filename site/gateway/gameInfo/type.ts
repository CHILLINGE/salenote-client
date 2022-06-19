export interface GameGateway {
  getGameInfo(data: InputFormat): Promise<GameInfoOutput>;
  getGamePriceHistory(data: InputFormat): Promise<GamePriceHistoryOutput>;
  getSeasonalDiscountList(data: InputFormat): Promise<GameSeasonalDiscountInfoOutput>;
}

export interface InputFormat {
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

export interface GamePriceHistoryOutput {
  data: {
    id: string;
    gamePriceHistoryList: GamePriceHistory[];
  };
}

export interface ResponseGamePriceHistory {
  zonedDateTime: string;
  currency: string;
  initialPrice: number;
  finalPrice: number;
  discountPercent: number;
}

export interface GamePriceHistory {
  date: Date;
  year: string;
  currency: string;
  initialPrice: number;
  finalPrice: number;
  discountPercent: number;
}

export interface GameSeasonalDiscountInfoOutput {
  id: string;
  seasonalDiscountList: GameSeasonalDiscountInfo[];
}

export interface ResponseSeasonalDiscount {
  id: string;
  name: string;
  key: string;
  year: number;
  startDate: string;
  endDate: string;
}

export interface GameSeasonalDiscountInfo {
  key: string;
  year: number;
  startDate: string;
  endDate: string;
}
