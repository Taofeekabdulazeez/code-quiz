import { createContext, useContext, useEffect, useReducer } from "react";
import {
  QuizContextInterface,
  QuizProviderProps,
  actionObj,
} from "../interfaces/interface";

const initialState: QuizContextInterface = {
  status: "",
  questions: [],
  index: 0,
  answers: [],
};

function reducer(state: QuizContextInterface, action: actionObj) {
  switch (action.type) {
    case "loading":
      return { ...state };
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
        answers: Array.from({ length: action.payload.length }, () => ""),
      };
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
    default:
      throw new Error("Action Unknown!");
  }
}

const QuizContent = createContext<QuizContextInterface>({
  index: 0,
  answers: [],
});
3;

function QuizProvider({ children }: QuizProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions, index, answers } = state;

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
      }}
    >
      {children}
    </QuizContent.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContent);
  if (!context) throw new Error("QuizContext used out pf QuizProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { QuizProvider, useQuiz };
