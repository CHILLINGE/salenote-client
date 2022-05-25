import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";

import Colors from "../../styles/colors";
import { SearchEmptyResult } from "./SearchEmptyResult";
import { SearchResultItem } from "./SearchResultItem";
import { SearchTextInput } from "./SearchTextInput";
import { useSearch } from "./useSearch";

export interface SearchProps {
  className?: string;
  initialSearch?: string;
  onSearchChange(txt: string): void;
}

export function Search(props: SearchProps) {
  const { className, initialSearch, onSearchChange } = props;
  const { resultCount, search, searchText, data, isEmpty } = useSearch({ pageSize: 10 });

  useEffect(() => {
    if (initialSearch) {
      search(initialSearch);
    }
  }, [initialSearch]);

  function handleSearchInput(val: string) {
    search(val);
    onSearchChange(val);
  }

  return (
    <StyledSearch className={className}>
      <StyledSearchTextInput
        placeholder="어떤 게임의 할인정보를 찾고 계세요?"
        value={searchText}
        onChange={handleSearchInput}
      />
      {searchText !== "" && (
        <>
          <ResultCount>총 {resultCount}개의 결과</ResultCount>
          <ResultBox>
            {isEmpty && <SearchEmptyResult />}
            {data.map((game) => (
              <Link href={`/game/${game.id}`} key={game.id}>
                <SearchResultItemWrapper>
                  <SearchResultItem
                    key={game.id}
                    title={game.name}
                    thumbnail={game.thumbnail}
                    price={
                      game.discount > 0
                        ? {
                            initial: formatWon(game.originalPrice),
                            final: formatWon(game.currentPrice),
                            discount: game.discount,
                          }
                        : { initial: formatWon(game.originalPrice), final: "", discount: 0 }
                    }
                  />
                  <HLine />
                </SearchResultItemWrapper>
              </Link>
            ))}
          </ResultBox>
        </>
      )}
    </StyledSearch>
  );
}

function formatWon(value: number) {
  const num = new Intl.NumberFormat("ko-KR", {}).format(Math.round(value / 100));
  return `${num}원`;
}

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;

  color: ${Colors.White};
`;

const StyledSearchTextInput = styled(SearchTextInput)`
  margin: 0 4rem;
`;

const ResultCount = styled.p`
  display: block;
  align-self: center;

  margin-top: 2rem;
  margin-bottom: 3rem;

  font-weight: 400;
  font-size: 1rem;
`;

const SearchResultItemWrapper = styled.div`
  padding: 1rem 1.6rem 0 1.6rem;

  cursor: pointer;

  &:hover {
    background-color: ${Colors.Active};
  }
`;

const HLine = styled.hr`
  margin-top: 1rem;
  margin-bottom: 0;
  border-bottom: 1px solid ${Colors.White};
`;

const ResultBox = styled.div`
  width: 100%;
`;
