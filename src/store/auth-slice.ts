import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  userId: string;
}

const initialState: AuthState = {
  userId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUserId: (state, action: PayloadAction<AuthState["userId"]>) => {
      state.userId = action.payload;
    },
  },
});

export const { registerUserId } = authSlice.actions;
export const selectUserId = (state: { auth: AuthState }) => state.auth.userId;

export default authSlice.reducer;
