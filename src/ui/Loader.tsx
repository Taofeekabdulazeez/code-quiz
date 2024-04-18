import styled from "styled-components";

const StyledLoader = styled.h1`
  font-weight: 500;
  font-size: 4rem;
  text-align: center;

  margin-top: 16rem;
`;

function Loader() {
  return <StyledLoader>Loading Questions...</StyledLoader>;
}

export default Loader;
