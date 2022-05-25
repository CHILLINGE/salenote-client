import { MdSearch } from "react-icons/md";
import styled from "styled-components";

import Colors from "../../styles/colors";

export interface SearchTextInputProps {
  className?: string;
  value?: string;
  onChange?(newVal: string): void;
  placeholder?: string;
}

export function SearchTextInput(props: SearchTextInputProps) {
  const { onChange, value, placeholder, className } = props;

  return (
    <StyledSearchTextInput className={className}>
      <SearchIcon />
      <TextInput value={value} onChange={(e) => onChange?.(e.target.value)} placeholder={placeholder} />
    </StyledSearchTextInput>
  );
}

const StyledSearchTextInput = styled.div`
  display: flex;
  align-items: center;
  padding: 1.1rem 0.2rem;

  border-bottom: 1px solid ${Colors.White};
  color: ${Colors.White};
`;

const TextInput = styled.input`
  margin-left: 0.5rem;

  font-size: 1.6rem;

  display: block;
  border: none;
  width: 100%;
  outline: none;

  background-color: transparent;
  color: inherit;
`;

const SearchIcon = styled(MdSearch)`
  width: 2rem;
  height: 2rem;
`;
