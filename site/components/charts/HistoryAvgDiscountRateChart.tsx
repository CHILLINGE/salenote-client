import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";

import Colors from "../../styles/colors";
import { DataFormat } from "./formatting/FormatHistoryAvgDRate";

export interface HistoryAvgDProps {
  data: DataFormat[];
  keys: string[];
}

export function HistoryAvgDiscountRateChart({ data, keys }: HistoryAvgDProps) {
  const commonProps = {
    width: 344,
    height: 130,
    padding: 0.5,
    margin: { top: 30, right: 0, bottom: 25, left: 0 },
    indexBy: "percentage",
    keys: [...keys],
    data: [...data],
  };

  return (
    <StyledRoot>
      <ResponsiveBar
        {...commonProps}
        theme={{
          background: Colors.ContentBackground,
          textColor: Colors.White,
          fontSize: 12,
        }}
        animate={true}
        isInteractive={false}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={({ id, data }) => String(data[`${id}Color`])}
        axisTop={null}
        axisRight={null}
        axisLeft={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
          // renderTick: CustomTick,
        }}
        labelTextColor="inherit:darker(1.4)"
        labelSkipWidth={16}
        labelSkipHeight={0}
        enableGridY={false}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return e.id + ": " + e.formattedValue + " in discountRate: " + e.indexValue;
        }}
        markers={[
          {
            axis: "y",
            value: 0,
            lineStyle: { stroke: Colors.White, strokeWidth: 1 },
          },
        ]}
      />
    </StyledRoot>
  );
}

const StyledRoot = styled.section`
  width: 34.4rem;
  height: 14.9rem;
  background-color: ${Colors.ContentBackground};
`;
