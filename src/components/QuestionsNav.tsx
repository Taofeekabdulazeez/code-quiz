import { useQuiz } from "../contexts/QuizContext";
import QIndex from "./QIndex";
import styled from "styled-components";

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 3rem;
`;

function QuestionsNav() {
  const { questions } = useQuiz();
  const numQuestions = Number(questions?.length);
  return (
    <div>
      <FlexWrap>
        {Array.from({ length: numQuestions }, (_, index) => (
          <QIndex key={index} qNumber={index + 1} />
        ))}
      </FlexWrap>
    </div>
  );
}

export default QuestionsNav;
