import styled from "styled-components";

import Colors from "../../styles/colors";
import { SearchResultItem } from "./SearchResultItem";
import { SearchTextInput } from "./SearchTextInput";
import { useSearch } from "./useSearch";

export function Search() {
  const { resultCount, search, searchText, data } = useSearch(10);

  return (
    <StyledSearch>
      <StyledSearchTextInput
        placeholder="어떤 게임의 할인 정보를 찾고 계세요?"
        value={searchText}
        onChange={(val) => search(val)}
      />
      <ResultCount>총 {resultCount}개의 결과</ResultCount>
      <ResultBox>
        {data.map((game) => (
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
          </SearchResultItemWrapper>
        ))}
      </ResultBox>
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
  align-items: center;

  color: ${Colors.White};
`;

const StyledSearchTextInput = styled(SearchTextInput)`
  width: 100%;
`;

const ResultCount = styled.p`
  display: block;
  margin-top: 2rem;
  margin-bottom: 3rem;

  font-weight: 400;
  font-size: 1rem;
`;

const SearchResultItemWrapper = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${Colors.White};
`;

const ResultBox = styled.div`
  width: 100%;
`;
