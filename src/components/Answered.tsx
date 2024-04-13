import styled from "styled-components";

const P = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
`;

function Answered() {
  return <P>12 of 30 questions answered</P>;
}

export default Answered;
