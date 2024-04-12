import { ReactNode } from "react";

export interface QuizProviderProps {
  children: ReactNode;
}

export interface actionObj {
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: Array<questionObj> | any;
}

export interface QuizContextInterface {
  questions?: Array<questionObj>;
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answers: Array<any>;
  // answer?: string;
  status?: string;
  dispatch?: (action: actionObj) => void;
}

export interface questionObj {
  question: string;
  options: Array<string>;
  correctOption: number;
}
