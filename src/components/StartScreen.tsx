import styled from "styled-components";
import { useQuiz } from "../contexts/QuizContext";
import { Button } from "../ui/Button";

const StyledStartScreen = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 4rem;
  font-weight: 600;
`;

function StartScreen() {
  const { status, dispatch } = useQuiz();

  if (status !== "ready") return null;
  return (
    <StyledStartScreen>
      <Heading>Let's start</Heading>
      <Button onClick={() => dispatch?.({ type: "start" })}>Start</Button>
    </StyledStartScreen>
  );
}

export default StartScreen;
