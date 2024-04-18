import { useAppSelector } from "../hooks/hooks";

function FinishScreen() {
  const { questions } = useAppSelector((state) => state.quiz);

  return (
    <div>
      Total score:{" "}
      <strong>
        {""} / {questions?.length}
      </strong>
    </div>
  );
}

export default FinishScreen;
