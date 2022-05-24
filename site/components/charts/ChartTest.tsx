import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";

import Colors from "../../styles/colors";

export interface DataProp {
  [key: string]: string | number;
}

export interface TestProps {
  data: DataProp[];
}

export function ChartTest({ data }: TestProps) {
  const keys = ["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"];
  const commonProps = {
    width: 344,
    height: 130,
    margin: { top: 30, right: 25, bottom: 20, left: 25 },
    indexBy: "country",
    keys,
    animate: true,
    isInteractive: false,
    padding: 0.5,
    labelTextColor: "inherit:darker(1.4)",
    labelSkipWidth: 16,
    labelSkipHeight: 0,
    enableGridY: false,
  };

  return (
    <StyledRoot>
      <ResponsiveBar
        data={data}
        {...commonProps}
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
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
          // renderTick: CustomTick,
        }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
        }}
      />
    </StyledRoot>
  );
}

const StyledRoot = styled.section`
  width: 34.4rem;
  height: 14.9rem;
  background-color: ${Colors.White};
`;
