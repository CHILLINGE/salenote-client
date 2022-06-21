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
    return data && data[year].map((discountPercent, index) => <td key={index}>{discountPercent}</td>);
  };

  return (
    <StyledTable>
      <TableHead>
        <tr>
          <td></td>
          {saleNameList?.map((name) => (
            <th key={name}>{name}</th>
          ))}
        </tr>
      </TableHead>
      <TableBody>
        {saleYearList?.map((year) => (
          <tr key={year}>
            <th>{year}</th>
            {discountList(year)}
          </tr>
        ))}
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
