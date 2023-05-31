import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DigitalUIState {
  active: "Pulsa" | "Paket Data" | "Flight" | "Listrik PLN";
}

const initialState: DigitalUIState = {
  active: "Pulsa",
};

export const digitalSlice = createSlice({
  name: "digital",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<DigitalUIState["active"]>) => {
      state.active = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActive } = digitalSlice.actions;
export const selectActive = (state: { digital: DigitalUIState }) =>
  state.digital.active;

export default digitalSlice.reducer;
