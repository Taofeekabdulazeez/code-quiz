import { useQuiz } from "../contexts/QuizContext";
import { Button } from "../ui/Button";

function StartScreen() {
  const { status, dispatch } = useQuiz();

  if (status !== "ready") return null;
  return (
    <div>
      <h1>Let's start</h1>
      <Button onClick={() => dispatch?.({ type: "start" })}>Start</Button>
    </div>
  );
}

export default StartScreen;
