import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startQuiz(state, action: PayloadAction<{ name: string; email: string }>) {
      state.name = action.payload.email;
      state.email = action.payload.email;
    },
  },
});

export const { startQuiz } = userSlice.actions;

export default userSlice.reducer;
