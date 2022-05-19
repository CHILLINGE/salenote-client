import styled from "styled-components";

import Colors from "../../styles/colors";

export interface PriceInfoProps {
  originPrice: number;
  salePrice: number;
  salePercentage: number;
}

export function PriceInfo({ originPrice, salePrice, salePercentage }: PriceInfoProps) {
  const formattingPrice = (price: number) => {
    return price.toLocaleString("ko-KR");
  };

  return (
    <StyledPriceInfo>
      <Title>현재 가격</Title>
      <Contents>
        <OriginPrice>{formattingPrice(originPrice)}원</OriginPrice>
        <SaleInfo>
          <SalePercent>-{salePercentage}%</SalePercent>
          <SalePrice>{formattingPrice(salePrice)}원</SalePrice>
        </SaleInfo>
      </Contents>
    </StyledPriceInfo>
  );
}

const StyledPriceInfo = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 0 1.6rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${Colors.White};
  letter-spacing: -0.02em;
  margin: 0;
`;

const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const OriginPrice = styled.del`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 2.1rem;
  color: ${Colors.Disabled};
`;

const SaleInfo = styled.div``;

const SalePercent = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 2.7rem;
  color: ${Colors.Green};
  margin-right: 1.2rem;
`;

const SalePrice = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 2.7rem;
  color: ${Colors.White};
`;
