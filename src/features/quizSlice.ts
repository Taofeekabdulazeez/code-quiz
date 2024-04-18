import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { questionObj } from "../interfaces/interface";

const SECS_PER_QUESTION = 30;

interface QuizState {
  questions: Array<questionObj>;
  index: number;
  answers: Array<number | null>;
  onSubmit: boolean;
  score: number;
  time: null | number;
}

const initialState: QuizState = {
  questions: [],
  index: 0,
  answers: [],
  onSubmit: false,
  score: 0,
  time: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    storeQuestions(state, action: PayloadAction<questionObj[]>) {
      state.questions = action.payload;
      state.answers = Array.from(
        { length: state.questions.length },
        () => null
      );
      state.time = SECS_PER_QUESTION * state.questions.length;
    },
    nextQuestion(state) {
      if (state.index !== state.questions.length - 1) state.index++;
    },
    prevQuestion(state) {
      if (state.index !== 0) state.index--;
    },
    gotoQuestion(state, action: PayloadAction<number>) {
      state.index = action.payload - 1;
    },
    newAnwser(state, action: PayloadAction<number>) {
      state.answers[state.index] = action.payload;
    },
    confirmSubmission(state) {
      state.onSubmit = true;
    },
    unConfirmSubmission(state) {
      state.onSubmit = false;
    },
    submit(state) {
      state.score = state.answers.filter(
        (answer, i) => answer === state.questions[i].correctOption
      ).length;
    },
  },
});

export const {
  nextQuestion,
  storeQuestions,
  prevQuestion,
  gotoQuestion,
  newAnwser,
  confirmSubmission,
  unConfirmSubmission,
  submit,
} = quizSlice.actions;

export default quizSlice.reducer;
