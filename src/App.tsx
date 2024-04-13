import styled from "styled-components";
import QuestionsNav from "./components/QuestionsNav";
import { useQuiz } from "./contexts/QuizContext";
import Aside from "./components/Aside";
import Time from "./components/Time";
import Answered from "./components/Answered";
import ButtonSubmit from "./components/ButtonSubmit";
import Modal from "./components/Modal";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import FinishScreen from "./components/FinishScreen";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  margin: 0 auto;
  position: relative;
  gap: 1.6rem;
  padding: 1.6rem;
  background-color: var(--color-bg-900);
`;

function App() {
  const { status } = useQuiz();
  return (
    <AppContainer>
      {status === "ready" && <StartScreen />}
      {status === "gameOn" && (
        <>
          <Main>
            <Modal />
            <QuestionScreen />
            <QuestionsNav />
          </Main>
          <Aside>
            <Time />
            <Answered />
            <ButtonSubmit />
          </Aside>
        </>
      )}
      {status === "finish" && <FinishScreen />}
    </AppContainer>
  );
}

export default App;
