import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";

import { SalenoteLogo } from "./SalenoteLogo";

export interface SearchLayoutProps {
  className?: string;
  children?: ReactNode;
}

export function SearchLayout(props: SearchLayoutProps) {
  return (
    <StyledSearchLayout className={props.className}>
      <Link href="/sdf" passHref>
        <StyledLogo />
      </Link>
      {props.children}
    </StyledSearchLayout>
  );
}

const StyledSearchLayout = styled.div``;

const StyledLogo = styled(SalenoteLogo)`
  display: block;

  width: 10rem;
  margin: 1rem auto 10rem auto;
`;
