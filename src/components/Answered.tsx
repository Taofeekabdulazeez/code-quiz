import styled from "styled-components";
import { useAppSelector } from "../hooks/hooks";

const P = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
`;

function Answered() {
  // const { answered, questions } = useQuiz();
  const { questions } = useAppSelector((state) => state.quiz);
  return (
    <P>
      {""} of {questions.length} questions answered
    </P>
  );
}

export default Answered;
