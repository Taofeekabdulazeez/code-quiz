import styled from "styled-components";
import Modal from "./Modal";
import QuestionScreen from "./QuestionScreen";
import QuestionsNav from "./QuestionsNav";
import Time from "./Time";
import Answered from "./Answered";
import ButtonSubmit from "./ButtonSubmit";
import Aside from "./Aside";

const MainLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  margin: 0 auto;
  position: relative;
  gap: 1.6rem;
  background-color: var(--color-bg-900);
`;

function Main() {
  return (
    <MainLayout>
      <Modal />
      <QuestionScreen />
      <QuestionsNav />
      <Aside>
        <Time />
        <Answered />
        <ButtonSubmit />
      </Aside>
    </MainLayout>
  );
}

export default Main;
