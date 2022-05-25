import { MdSearchOff } from "react-icons/md";
import styled from "styled-components";

export function SearchEmptyResult() {
  return (
    <StyledSearchEmptyResult>
      <StyledIcon />
      <Description>
        이런, 아무 정보도 찾지 못했어요
        <br />
        입력된 정보를 확인해주세요!
      </Description>
    </StyledSearchEmptyResult>
  );
}

const StyledSearchEmptyResult = styled.div`
  padding-top: 9rem;
`;

const StyledIcon = styled(MdSearchOff)`
  display: block;
  margin: 0 auto;

  width: 3.2rem;
  height: 3.2rem;
`;

const Description = styled.p`
  margin-top: 1.6rem;
  text-align: center;
  line-height: 1.8rem;
  font-size: 1.3rem;

  font-family: "Spoqa Han Sans Neo";
`;
