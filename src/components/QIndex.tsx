import styled from "styled-components";
import { useQuiz } from "../contexts/QuizContext";

const Button = styled.button`
  background: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: var(--color-primary); */
  color: var(--color-text);
  border: 0.2rem solid #999;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
  /* transition: all 0.3s; */

  &.answered {
    background-color: var(--color-green);
    color: #fff;
    border: 0.2rem solid var(--color-green);
  }

  &.active {
    background-color: var(--color-primary);
    color: #fff;
    border: 0.2rem solid var(--color-primary);
  }
`;

interface QindexProps {
  qNumber: number;
}

function QIndex({ qNumber }: QindexProps) {
  const { index, dispatch, answers } = useQuiz();
  const hasAnswer = typeof answers[qNumber - 1] === "number";
  return (
    <Button
      className={`${index + 1 === qNumber ? "active" : ""} ${
        hasAnswer ? "answered" : ""
      }`}
      onClick={() => dispatch?.({ type: "gotoQuestion", payload: qNumber - 1 })}
    >
      {qNumber}
    </Button>
  );
}

export default QIndex;
