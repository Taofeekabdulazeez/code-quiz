import { ReactNode } from "react";

export interface QuizProviderProps {
  children: ReactNode;
}

export interface QuizAction {
  type:
    | "loading"
    | "dataReceived"
    | "ready"
    | "start"
    | "nextQuestion"
    | "prevQuestion"
    | "gotoQuestion"
    | "newAnswer"
    | "onSubmit"
    | "unSubmit"
    | "end";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: Array<questionObj> | any;
}

export interface QuizState {
  status: string;
  questions: Array<questionObj>;
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answers: Array<any>;
  onSubmit: boolean;
  score: number;
}

// The context will always include more derived states
export interface QuizContextInterface {
  questions: Array<questionObj>;
  index: number;
  onSubmit?: boolean;
  score?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answers: Array<any>;
  answered?: number;
  status?: string;
  dispatch?: (action: QuizAction) => void;
}

export interface questionObj {
  question: string;
  options: Array<string>;
  correctOption: number;
}
