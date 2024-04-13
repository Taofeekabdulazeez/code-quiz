import { ReactNode } from "react";
import styled from "styled-components";

const StyledAside = styled.div`
  background-color: var(--color-bg-700);
  padding: 1.2rem;
`;

interface AsideProps {
  children: ReactNode;
}

function Aside({ children }: AsideProps) {
  return <StyledAside>{children}</StyledAside>;
}

export default Aside;
