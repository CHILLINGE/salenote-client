import { debounce } from "lodash";
import { useCallback, useState } from "react";

import { useAPI } from "../../gateway";

interface SearchOption {
  pageSize: number;
}

export function useSearch({ pageSize }: SearchOption) {
  const api = useAPI();
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [data, setData] = useState<GameRecord>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);

  async function search(name: string) {
    setSearchText(name);

    await debounceSearchAPI(name);
  }
  const debounceSearchAPI = useCallback(
    debounce(async (name) => {
      setIsLoading(true);
      setIsEmpty(false);
      const ret = await api.search.searchByName(name, 0, pageSize);

      if (ret.totalCount === 0) {
        setIsEmpty(true);
      }

      setData(ret.result);
      setTotalCount(ret.totalCount);
      setOffset(0);
      setIsLoading(false);
    }, 200),
    [],
  );

  async function fetchMore() {
    setIsLoading(true);

    const ret = await api.search.searchByName(searchText, offset, pageSize);

    setData((data) => [...data, ...ret.result]);
    setTotalCount(ret.totalCount);
    setOffset((offset) => offset + 1);
    setIsLoading(false);
  }

  return {
    search,
    isEmpty,
    data,
    searchText,
    resultCount: totalCount,
    isLoading,
    fetchMore,
  };
}

type GameRecord = Array<{
  id: string;
  name: string;
  thumbnail: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
}>;
