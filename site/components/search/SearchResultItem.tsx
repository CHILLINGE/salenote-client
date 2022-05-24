import styled from "styled-components";

import Colors from "../../styles/colors";

export interface SearchResultItemProps {
  className?: string;

  title: string;
  thumbnail?: string;
  price: PriceInfo;
}

interface PriceInfo {
  final: string;
  initial: string;
  discount: number;
}

export function SearchResultItem(props: SearchResultItemProps) {
  const { title, thumbnail, price, className } = props;

  return (
    <StyledSearchResultItem className={className}>
      <ThumbnailWrapper>
        {thumbnail ? <Thumbnail src={thumbnail} alt="Thumbnail Image" /> : <ThumbnailPlaceholder />}
      </ThumbnailWrapper>
      <Title>{title}</Title>
      <PriceBox>
        {price.discount !== 0 && (
          <>
            <Discount>-{price.discount}%</Discount>
            <InitialPrice>{price.initial}</InitialPrice>
          </>
        )}
        <FinalPrice>{price.final}</FinalPrice>
      </PriceBox>
    </StyledSearchResultItem>
  );
}

const StyledSearchResultItem = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr;
  grid-template-rows: 1fr 1fr;

  height: 4rem;

  color: ${Colors.White};
`;

const ThumbnailWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / 1;

  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const ThumbnailPlaceholder = styled.div`
  background-color: ${Colors.Gray1};
  height: 100%;
  width: 100%;
`;

const Title = styled.h3`
  grid-row: 1 / 1;
  grid-column: 2 / 2;

  font-size: 1.2rem;
  font-weight: 400;

  margin-left: 1rem;
`;

const PriceBox = styled.div`
  grid-row: 2 / 2;
  grid-column: 2 / 2;
  justify-self: end;

  display: flex;
  align-items: baseline;
`;

const Discount = styled.p`
  font-size: 1.2rem;
  font-weight: 700;

  color: ${Colors.Green};

  margin-right: 0.8rem;
`;

const InitialPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  text-decoration-line: line-through;

  color: ${Colors.Disabled};

  margin-right: 0.4rem;
`;

const FinalPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;
