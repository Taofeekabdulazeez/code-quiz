import styled from "styled-components";

const StyledLoader = styled.h1`
  font-weight: 500;
  font-size: 4rem;
  text-align: center;

  margin-top: 16rem;
`;

interface LoaderProps {
  message?: string;
}

function Loader({ message = "Loading" }: LoaderProps) {
  return <StyledLoader>{message}</StyledLoader>;
}

export default Loader;
