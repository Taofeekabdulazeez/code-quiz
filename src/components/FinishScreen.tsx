import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { score, questions } = useQuiz();
  return (
    <div>
      Total score:{" "}
      <strong>
        {score} / {questions?.length}
      </strong>
    </div>
  );
}

export default FinishScreen;
