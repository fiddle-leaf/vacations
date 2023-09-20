//import { signUp } from "./users-service";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  error: "",
  status: "idle",
};

/*export const signedUp = createAsyncThunk("user/signedUp", async (data) => {
  const user = await signUp(data);
  console.log(user);
  return user;
});*/

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn(state, action) {
      state.user = action.payload;
    },
  },
});

export const { loggedIn } = userSlice.actions;

export const currentUser = (state) => state.user;

export default userSlice.reducer;
