import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  id: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  model: string;
  image: string;
}

const initialState: CartState = {
  id: "",
  title: "",
  price: 0,
  quantity: 0,
  total: 0,
  model: "",
  image: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartState>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.price = action.payload.price;
      state.quantity = action.payload.quantity;
      state.total = action.payload.total;
      state.model = action.payload.model;
      state.image = action.payload.image;
    },
  },
});

export const { addItem } = cartSlice.actions;
export const selectCart = (state: { cart: CartState }) => state.cart;

export default cartSlice.reducer;
