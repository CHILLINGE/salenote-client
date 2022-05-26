import styled from "styled-components";

import Fonts from "../../../styles/fonts";
import { FooterEntry } from "./FooterEntry";

export function Footer() {
  return (
    <StyledFooter>
      <Title>CONTACT US</Title>
      <CreditBox>
        <FooterEntry name="김지윤" part="FRONTEND" email="smallj1044@gmail.com" />
        <FooterEntry name="이지윤" part="BACKEND" email="fullmoon5110@gmail.com" />
        <FooterEntry name="박건영" part="FRONTEND" email="teki@tekiter.net" />
        <FooterEntry name="조희연" part="UX/UI" email="jhy6325@gmail.com" />
      </CreditBox>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  color: white;
  background-color: #0c0f39;

  padding: 4rem 1.6rem 5rem 1.6rem;
`;

const Title = styled.h4`
  font-family: ${Fonts.Poppins};
  font-weight: 700;
  font-size: 1.5rem;

  margin-bottom: 3rem;
`;

const CreditBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
`;
