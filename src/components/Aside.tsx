import { ReactNode } from "react";
import styled from "styled-components";

const StyledAside = styled.div`
  background-color: var(--color-bg-700);
`;

interface AsideProps {
  children: ReactNode;
}

function Aside({ children }: AsideProps) {
  return <StyledAside>{children}</StyledAside>;
}

export default Aside;
