import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import quizReducer from "./features/quizSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
