import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Container } from "../ui/Container";
import Header from "./Header";
import Question from "./Question";
import Timer from "../ui/Timer";
import styled from "styled-components";
import { Button } from "../ui/Button";
import { useAppDispatch } from "../hooks/hooks";
import { nextQuestion, prevQuestion } from "../features/quizSlice";

const ButtonWrap = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  gap: 1.2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 4rem;
`;

function QuestionScreen() {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Header>
        <Title>GNS112 CA</Title>
        {false && <Timer />}
      </Header>
      <Question />
      <ButtonWrap>
        <Button
          onClick={() => {
            dispatch(prevQuestion());
          }}
        >
          <FaArrowLeft /> Previous
        </Button>
        <Button
          onClick={() => {
            dispatch(nextQuestion());
          }}
        >
          Next <FaArrowRight />
        </Button>
      </ButtonWrap>
    </Container>
  );
}

export default QuestionScreen;
