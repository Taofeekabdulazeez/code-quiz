import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { findStudent } from "../services/apiStudents";

interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: "",
  email: "",
};

export const confirmEmail = createAsyncThunk(
  "user/confirmEmail",
  async (email: string) => {
    const data = await findStudent(email);

    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser(state, action: PayloadAction<{ name: string; email: string }>) {
      state.name = action.payload.email;
      state.email = action.payload.email;
    },
  },
  extraReducers: function (builder) {
    builder.addCase(confirmEmail.pending, () => console.log("pending"));
    builder.addCase(confirmEmail.fulfilled, () => console.log("founded"));
  },
});

export const { storeUser } = userSlice.actions;

export default userSlice.reducer;
