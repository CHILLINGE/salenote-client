import { debounce } from "lodash";
import { useCallback, useState } from "react";

import { useAPI } from "../../gateway";

export function useSearch(pageSize: number) {
  const api = useAPI();
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [data, setData] = useState<GameRecord>([]);
  const [totalCount, setTotalCount] = useState(0);

  async function search(name: string) {
    setSearchText(name);

    await debounceSearchAPI(name);
  }
  const debounceSearchAPI = useCallback(
    debounce(async (name) => {
      const ret = await api.search.searchByName(name, 0, pageSize);

      setData(ret.result);
      setTotalCount(ret.totalCount);
      setOffset(0);
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
