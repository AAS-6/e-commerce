import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ViewUIState {
  loginOverlay: boolean;
  page: "CART" | "SHIPPING" | "PAYMENT";
}

const initialState: ViewUIState = {
  loginOverlay: false,
  page: "CART",
};

export const counterSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleLoginOverlay: state => {
      state.loginOverlay = !state.loginOverlay;
    },
    setPage: (state, action: PayloadAction<ViewUIState["page"]>) => {
      state.page = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoginOverlay , setPage} = counterSlice.actions;
export const selectLoginOverlay = (state: { ui: ViewUIState }) =>
  state.ui.loginOverlay;

export default counterSlice.reducer;
