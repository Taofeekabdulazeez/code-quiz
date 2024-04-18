import { useAppSelector } from "./hooks/hooks.ts";
import StartScreen from "./components/StartScreen";
import FinishScreen from "./components/FinishScreen";
import Main from "./components/Main.tsx";
import AppLayout from "./components/AppLayout.tsx";
import Loader from "./ui/Loader.tsx";

function App() {
  const status = useAppSelector((state) => state.quiz.status);
  return (
    <AppLayout>
      {status === "ready" && <StartScreen />}
      {status === "start" && <Main />}
      {status === "submitting" && <Loader message="Submitting.." />}
      {status === "finish" && <FinishScreen />}
    </AppLayout>
  );
}

export default App;
