import { sleep } from "../../utils/timing";

export interface SearchGateway {
  searchByName(
    name: string,
    offset: number,
    size: number,
  ): Promise<{
    totalCount: number;
    result: Array<{
      id: string;
      name: string;
      thumbnail: string;
      originalPrice: number;
      currentPrice: number;
      discount: number;
    }>;
  }>;
}

export function createMockSearchGateway(): SearchGateway {
  return {
    async searchByName(name, _offset, _size) {
      await sleep(200);
      if (name.length > 8) {
        return {
          totalCount: 0,
          result: [],
        };
      }

      return {
        totalCount: 2,
        result: [
          {
            id: "200",
            name: "Game Without Discount",
            thumbnail: "",
            currentPrice: 1000000,
            originalPrice: -1,
            discount: -1,
          },
          {
            id: "300",
            name: "Game With Discount",
            thumbnail: "",
            currentPrice: 500000,
            originalPrice: 1000000,
            discount: 50,
          },
        ],
      };
    },
  };
}
