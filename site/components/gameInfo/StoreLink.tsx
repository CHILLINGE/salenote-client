import Link from "next/link";
import styled from "styled-components";

import Colors from "../../styles/colors";

export interface StoreLinkProps {
  storeLink: string;
}

export function StoreLink({ storeLink }: StoreLinkProps) {
  return (
    <StoreLinkWrapper>
      <Link href={storeLink} passHref>
        <StoreLinkButton target="_blank" rel="noreferrer">
          steam에서 자세히 보기
        </StoreLinkButton>
      </Link>
    </StoreLinkWrapper>
  );
}

const StoreLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 7.2rem 0 20.5rem;
  background-color: ${Colors.Background};
`;

const StoreLinkButton = styled.a`
  width: 15.6rem;
  height: 3.5rem;
  border: 1px solid ${Colors.Green};
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 3.5rem;
  letter-spacing: -0.02em;
  color: ${Colors.Green};
  text-align: center;
  text-decoration: none;
`;
