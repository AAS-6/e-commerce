import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface CityState {
  id: string;
}

const initialState: CityState = {
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerCityId: (state, action: PayloadAction<any>) => {
      state.id = action.payload;
    },
  },
});

export const { registerCityId } = userSlice.actions;
export const selectCityId = (state: RootState) => state.user.id;

export default userSlice.reducer;
