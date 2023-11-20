import { createSlice } from '@reduxjs/toolkit';
import { SHIPPING_COST } from './Constant';
import { addItemCart, resetShippingCost } from './Cart-Utils';
import { removeItemFromCart } from './Cart-Utils';
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  shippingCost: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        shippingCost: SHIPPING_COST,
        cartItems: addItemCart(state.cartItems, action.payload),
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        shippingCost: '',
        cartItems: [],
      };
    },
    toggleHiddenCart: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const { addToCart, clearCart, removeFromCart, toggleHiddenCart } =
  cartSlice.actions;

export default cartSlice.reducer;
