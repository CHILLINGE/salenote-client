import styled from "styled-components";

import Colors from "../../styles/colors";
import { DataFormat } from "./formatting/FormatPastSeasonalDiscount";

export interface PastDiscountTableProps {
  saleNameList?: string[];
  saleYearList?: number[];
  data?: DataFormat;
}

export function PastDiscountTable({ saleNameList, saleYearList, data }: PastDiscountTableProps) {
  const discountList = (year: number) => {
    return data && data[year].map((item) => <td>{item}</td>);
  };

  return (
    <StyledTable>
      <TableHead>
        <td></td>
        {saleNameList?.map((name) => (
          <th>{name}</th>
        ))}
      </TableHead>
      <TableBody>
        {saleYearList?.map((year) => (
          <tr>
            <th>{year}</th>
            {discountList(year)}
          </tr>
        ))}
        {/* <tr>
          <th>2023</th>
          <td>23</td>
          <td>43</td>
          <td>23</td>
          <td>.</td>
          <td>.</td>
        </tr>
        <tr>
          <th>2022</th>
          <td>.</td>
          <td>.</td>
          <td>2</td>
          <td>53</td>
          <td>67</td>
        </tr>
        <tr>
          <th>2021</th>
          <td>.</td>
          <td>.</td>
          <td>.</td>
          <td>.</td>
          <td>2</td>
        </tr>
        <tr>
          <th>2020</th>
          <td>12</td>
          <td>554</td>
          <td>9</td>
          <td>.</td>
          <td>.</td>
        </tr> */}
      </TableBody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  width: 100%;
  color: ${Colors.White};
  text-align: center;

  td {
    border: 1px solid ${Colors.Disabled};
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: -0.02em;
  }

  & > thead {
    * {
      padding: 0.8rem;
    }

    th {
      font-weight: 700;
      font-size: 1.2rem;
      letter-spacing: -0.02em;
    }

    td {
      border-top: 0;
      border-left: 0;
    }
  }

  & > tbody {
    * {
      padding: 0.5rem;
    }

    th {
      font-weight: 600;
      font-size: 1.2rem;
      letter-spacing: -0.02em;
    }

    tr {
      td:last-child {
        border-right: 0;
      }
    }

    tr:last-child {
      td {
        border-bottom: 0;
      }
    }
  }
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;
