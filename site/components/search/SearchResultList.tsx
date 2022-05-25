import { ReactElement } from "react";
import styled from "styled-components";

import Colors from "../../styles/colors";

export interface SearchResultListProps {
  children: ReactElement[];
}

export function SearchResultList(props: SearchResultListProps) {
  const { children = [] } = props;

  return (
    <StyledSearchResultList>
      {children.map((el) => (
        <>
          {el}
          <HLine key={`line-${el.key}`} />
        </>
      ))}
    </StyledSearchResultList>
  );
}

const StyledSearchResultList = styled.div``;

const HLine = styled.hr`
  height: 1px;
  background-color: ${Colors.LightGray};

  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`;
