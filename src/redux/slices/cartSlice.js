import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addproductInCart: (state, action) => {
      console.log("👉 Adding to cart:", action.payload);
      state.value.push(action.payload)
    },

    removeFromCart: (state, action) => {
      state.value = state.value.filter(
        item => item.id !== action.payload.id
      );
  }
}
})
export const { addproductInCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
