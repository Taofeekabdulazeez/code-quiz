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

function QuestionScreen() {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Header>
        {false && <Timer />}
        <div></div>
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
