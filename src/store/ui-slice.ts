import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ViewUIState {
  loginOverlay: boolean;
  page: "CART" | "SHIPPING" | "PAYMENT";
  cartOverlay: boolean;
}

const initialState: ViewUIState = {
  loginOverlay: false,
  page: "CART",
  cartOverlay: false,
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
    setCartOverlay: (state, action: PayloadAction<boolean>) => {
      state.cartOverlay = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoginOverlay, setPage, setCartOverlay } =
  counterSlice.actions;
export const selectLoginOverlay = (state: { ui: ViewUIState }) =>
  state.ui.loginOverlay;

export const selectCartOverlay = (state: { ui: ViewUIState }) =>
  state.ui.cartOverlay;
export default counterSlice.reducer;
