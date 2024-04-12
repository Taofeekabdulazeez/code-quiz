import styled from "styled-components";
import Header from "./components/Header";
import Question from "./components/Question";
import Timer from "./components/Timer";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import QuestionsNav from "./components/QuestionsNav";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useQuiz } from "./contexts/QuizContext";

const AppContainer = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 0.3fr; */
  width: 100rem;
  margin: 0 auto;
  padding: 1.6rem;
`;

const ButtonWrap = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  gap: 1.2rem;
`;

function App() {
  const { dispatch } = useQuiz();
  return (
    <AppContainer>
      <main>
        <Container>
          <Header>
            <Timer />
            <Button>Submit</Button>
          </Header>
          <Question />
          <ButtonWrap>
            <Button
              $type="inverted"
              onClick={() =>
                dispatch?.({
                  type: "prevQuestion",
                })
              }
            >
              <FaArrowLeft /> Previous
            </Button>
            <Button
              $type="inverted"
              onClick={() =>
                dispatch?.({
                  type: "nextQuestion",
                })
              }
            >
              Next <FaArrowRight />
            </Button>
          </ButtonWrap>
        </Container>
        <QuestionsNav />
      </main>
    </AppContainer>
  );
}

export default App;
