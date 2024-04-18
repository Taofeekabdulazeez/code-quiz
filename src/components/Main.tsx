import styled from "styled-components";
import Modal from "./Modal";
import QuestionScreen from "./QuestionScreen";
import QuestionsNav from "./QuestionsNav";
import Time from "./Time";
import Answered from "./Answered";
import ButtonSubmit from "./ButtonSubmit";
import Aside from "./Aside";
import { questionObj } from "../interfaces/interface";
import store from "../../store";
import { storeQuestions } from "../features/quizSlice";

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
      <Aside>
        <Time />
        <Answered />
        <ButtonSubmit />
      </Aside>
      <QuestionsNav />
    </MainLayout>
  );
}

export default Main;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(): Promise<questionObj> {
  const response = await fetch("http://localhost:8000/questions");
  const data = await response.json();

  store.dispatch(storeQuestions(data));

  return data;
}
