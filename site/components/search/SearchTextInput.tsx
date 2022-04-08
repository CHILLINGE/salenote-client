import { MdSearch } from "react-icons/md";
import styled from "styled-components";

export interface SearchTextInputProps {
  className?: string;
  value?: string;
  onChange?(newVal: string): void;
  placeholder?: string;
}

export function SearchTextInput(props: SearchTextInputProps) {
  const { onChange, value, placeholder } = props;

  return (
    <StyledSearchTextInput>
      <MdSearch />
      <TextInput value={value} onChange={(e) => onChange?.(e.target.value)} placeholder={placeholder} />
    </StyledSearchTextInput>
  );
}

const StyledSearchTextInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0.2rem;

  border-bottom: 1px solid black;
`;

const TextInput = styled.input`
  margin-left: 0.5rem;

  display: block;
  border: none;
  width: 100%;
  outline: none;
`;
