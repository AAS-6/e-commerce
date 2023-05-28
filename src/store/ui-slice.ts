import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ViewUIState {
  loginOverlay: boolean;
}

const initialState: ViewUIState = {
  loginOverlay: false,
};

export const counterSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleLoginOverlay: state => {
      state.loginOverlay = !state.loginOverlay;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoginOverlay } = counterSlice.actions;
export const selectLoginOverlay = (state: { ui: ViewUIState }) =>
  state.ui.loginOverlay;

export default counterSlice.reducer;
