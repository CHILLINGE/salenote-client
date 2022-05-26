import Link from "next/link";
import { ReactNode } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";

import { Footer } from "./footer/Footer";
import { SalenoteLogo } from "./SalenoteLogo";

interface GameDetailLayoutProps {
  className?: string;
  children?: ReactNode;
}

export function GameDetailLayout(props: GameDetailLayoutProps) {
  return (
    <StyledSearchLayout className={props.className}>
      <NavBar>
        <Link href="/" passHref>
          <LogoLink>
            <StyledLogo />
          </LogoLink>
        </Link>
        <Link href="/" passHref>
          <SearchLink>
            <StyledSearchIcon />
          </SearchLink>
        </Link>
      </NavBar>

      <ChildBox>{props.children}</ChildBox>

      <Footer />
    </StyledSearchLayout>
  );
}

const StyledSearchLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ChildBox = styled.div`
  flex-grow: 1;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 4.8rem;

  color: white;
`;

const SearchLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.8rem;
  width: 4.8rem;
`;

const StyledLogo = styled(SalenoteLogo)`
  display: block;

  width: 10rem;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
`;

const StyledSearchIcon = styled(MdSearch)`
  width: 2.8rem;
  height: 2.8rem;

  color: white;
`;
