export interface GameGateway {
  getGameInfo(data: GameInfoInput): Promise<GameInfoOutput>;
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
