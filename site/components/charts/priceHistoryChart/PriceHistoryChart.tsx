import { ResponsiveLine, Serie } from "@nivo/line";
import styled from "styled-components";

import Colors from "../../../styles/colors";
import { CustomTooltip } from "./CustomTooltip";

export interface PriceHistoryChartProps {
  data: Serie[];
}

export function PriceHistoryChart({ data }: PriceHistoryChartProps) {
  const commonProps = {
    data: [...data],
    // width: 344,
    height: 207,
  };

  return (
    <StyledRoot>
      <ResponsiveLine
        {...commonProps}
        theme={{
          background: Colors.ContentBackground,
          textColor: Colors.White,
          fontSize: 12,
        }}
        colors={{ datum: "color" }}
        margin={{ top: 70, right: 14, bottom: 40, left: 14 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
          precision: "day",
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="stepAfter"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickValues: "every months",
          legendOffset: -12,
          format: "%m.%d",
        }}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        pointSize={10}
        pointColor={{ from: "color", modifiers: [] }}
        pointLabelYOffset={-12}
        legends={[]}
        enableSlices={"x"}
        sliceTooltip={({ slice }) => <CustomTooltip point={slice.points[0]} />}
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
  width: 100rem;
  height: 100rem;
  position: relative;
`;
