import { storeQuestions } from "../features/quizSlice";
import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "../services/apiQuestions";
import { useAppDispatch } from "../hooks/hooks";
import styled from "styled-components";

import Loader from "../ui/Loader";
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
  const { data, isLoading } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  const dispatch = useAppDispatch();
  if (data) dispatch(storeQuestions(data));

  if (isLoading) return <Loader />;

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
