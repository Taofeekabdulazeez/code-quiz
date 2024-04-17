import styled from "styled-components";
import { Outlet } from "react-router-dom";

const AppContainer = styled.div`
  padding: 1.6rem;
`;

function App() {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
}

export default App;
