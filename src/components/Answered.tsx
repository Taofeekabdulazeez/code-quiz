import styled from "styled-components";
import { useQuiz } from "../contexts/QuizContext";

const P = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
`;

function Answered() {
  const { answered, questions } = useQuiz();
  return (
    <P>
      {answered} of {questions.length} questions answered
    </P>
  );
}

export default Answered;
