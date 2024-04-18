import styled from "styled-components";
import { ReactNode } from "react";

const AppContainer = styled.div`
  padding: 1.6rem;
`;

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return <AppContainer>{children}</AppContainer>;
}

export default AppLayout;
