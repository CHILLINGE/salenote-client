import styled from "styled-components";

import Fonts from "../../../styles/fonts";

interface FooterEntryProps {
  name: string;
  part: string;
  email: string;
}

export function FooterEntry(props: FooterEntryProps) {
  const { name, part, email } = props;

  return (
    <StyledFooterEntry>
      <NameSlot>{name}</NameSlot>
      <PartSlot>{part}</PartSlot>
      <EmailSlot>{email}</EmailSlot>
    </StyledFooterEntry>
  );
}

const StyledFooterEntry = styled.div`
  display: grid;

  height: 4rem;

  grid-template-columns: 4.5rem 1fr;
  grid-template-rows: 2.2rem 1fr;
`;

const NameSlot = styled.span`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;

  font-family: ${Fonts.SpoqaHanSans};
  font-size: 1.3rem;
  font-weight: 700;
`;
const PartSlot = styled.span`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;

  margin-top: 0.3rem;

  font-weight: 400;
  font-size: 1rem;
`;
const EmailSlot = styled.span`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;

  font-weight: 400;
  font-size: 1rem;
`;
