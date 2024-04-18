import { useAppSelector } from "../hooks/hooks";

function FinishScreen() {
  const { questions, score } = useAppSelector((state) => state.quiz);

  return (
    <div>
      Total score:
      <strong>
        {score} / {questions.length}
      </strong>
    </div>
  );
}

export default FinishScreen;
