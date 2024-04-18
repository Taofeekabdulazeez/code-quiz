import styled from "styled-components";
import { useAppSelector } from "../hooks/hooks";

const Styled = styled.div`
  margin-top: 12rem;
  text-align: center;
  font-weight: 500;
  font-size: 2.4rem;
`;

function FinishScreen() {
  const { questions, score } = useAppSelector((state) => state.quiz);

  return (
    <Styled>
      Total score:
      <strong>
        {""}
        {score} / {questions.length}
      </strong>
    </Styled>
  );
}

export default FinishScreen;
