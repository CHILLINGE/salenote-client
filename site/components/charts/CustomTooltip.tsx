import { Point } from "@nivo/line";
import styled from "styled-components";

import Colors from "../../styles/colors";

interface CustomTooltipProps {
  point: Point;
}

export function CustomTooltip({ point }: CustomTooltipProps) {
  const { data } = point;
  console.log(point);

  return (
    <Tooltip>
      <StyledDate>{data.xFormatted}</StyledDate>
      <Contents>
        <Price>
          가격: <Highlight>{data.yFormatted}</Highlight>
        </Price>
        <DiscountPercent>
          할인율: <Highlight>-40%</Highlight>
        </DiscountPercent>
      </Contents>
    </Tooltip>
  );
}

const Tooltip = styled.aside`
  background-color: White;
  width: 16.3rem;
  height: 7.8rem;
  padding: 0.8rem 1rem 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.14);
  border-radius: 0.2rem;
`;

const StyledDate = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${Colors.Gray2};
  letter-spacing: 0.02rem;
  margin-bottom: 0.6rem;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Price = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  color: ${Colors.Gray2};
  letter-spacing: 0.02rem;
  margin-right: 0.7rem;
`;

const DiscountPercent = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  color: ${Colors.Gray2};
  letter-spacing: 0.02rem;
`;

const Highlight = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${Colors.Green2};
  letter-spacing: 0.02rem;
`;
