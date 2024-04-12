import styled from "styled-components";
import CheckBox from "../ui/CheckBox";

const StyledOption = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-bg-900);
  border-radius: 9px;
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.4;
`;

interface OptionProps {
  children: string;
}

function Option({ children }: OptionProps) {
  return (
    <StyledOption>
      <CheckBox />
      <Span>{children}</Span>
    </StyledOption>
  );
}

export default Option;
