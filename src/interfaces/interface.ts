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
  questions: Array<questionObj>;
  index: number;
  answers: Array<number | null>;
  onSubmit: boolean;
  score: number;
  time: null | number;
  status: "ready" | "start" | "finish" | "submitting";
}

// The context will always include more derived states
export interface QuizContextInterface {
  questions: Array<questionObj>;
  index: number;
  onSubmit?: boolean;
  score?: number;
  answers: Array<null | number>;
  answered?: number;
  status?: string;
  dispatch?: (action: QuizAction) => void;
}

export interface questionObj {
  question: string;
  options: Array<string>;
  correctOption: number;
}

export interface Student {
  name: string;
  email: string;
  score: number;
}
