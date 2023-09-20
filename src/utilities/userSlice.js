import { signUp } from "./users-service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  error: "",
  status: "idle",
};

export const signedUp = createAsyncThunk("user/signedUp", async (data) => {
  const user = await signUp(data);
  console.log(user);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signedUp.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signedUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "idle";
      });
  },
});

export const { loggedIn } = userSlice.actions;

export const currentUser = (state) => state.user;

export default userSlice.reducer;
