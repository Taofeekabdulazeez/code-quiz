import { createContext, useContext, useEffect, useReducer } from "react";
import {
  QuizContextInterface,
  QuizProviderProps,
  QuizState,
  QuizAction,
} from "../interfaces/interface";

const initialState: QuizState = {
  status: "",
  questions: [],
  index: 0,
  answers: [],
  onSubmit: false,
  score: 0,
  time: null,
};

function reducer(state: QuizState, action: QuizAction) {
  switch (action.type) {
    case "loading":
      return { ...state };
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
        answers: Array.from({ length: action.payload.length }, () => null),
      };
    case "start":
      return { ...state, status: "gameOn" };
    case "nextQuestion":
      return {
        ...state,
        index:
          state.index + 1 === state.questions?.length
            ? state.index
            : state.index + 1,
      };
    case "prevQuestion":
      return {
        ...state,
        index: state.index === 0 ? state.index : state.index - 1,
      };
    case "gotoQuestion":
      return { ...state, index: action.payload };
    case "newAnswer":
      return {
        ...state,
        answers: state.answers?.fill(
          action.payload,
          state.index,
          state.index + 1
        ),
      };
    case "onSubmit":
      return { ...state, onSubmit: true };
    case "unSubmit":
      return { ...state, onSubmit: false };
    case "end":
      return {
        ...state,
        status: "finish",
        score: state.questions
          ? state.answers.filter(
              (answer, index) => answer === state.questions[index].correctOption
            ).length
          : 0,
      };
    default:
      throw new Error("Action Unknown!");
  }
}

const QuizContent = createContext<QuizContextInterface>(
  {} as QuizContextInterface
);

function QuizProvider({ children }: QuizProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions, index, answers, onSubmit, score } = state;

  const answered = answers.filter(
    (answer) => typeof answer === "number"
  ).length;

  useEffect(function () {
    async function fetchQuestions() {
      const response = await fetch("http://localhost:8000/questions");
      const data = await response.json();
      dispatch({ type: "dataReceived", payload: data });
    }

    fetchQuestions();
  }, []);

  return (
    <QuizContent.Provider
      value={{
        status,
        dispatch,
        questions,
        index,
        answers,
        onSubmit,
        score,
        answered,
      }}
    >
      {children}
    </QuizContent.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContent);
  if (!context) throw new Error("QuizContext used outside of QuizProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { QuizProvider, useQuiz };
