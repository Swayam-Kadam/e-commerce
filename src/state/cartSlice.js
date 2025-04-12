import { createSlice } from '@reduxjs/toolkit';

const getInitialCart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
  return total;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    total: getInitialCart(),
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      state.total += parseFloat(product.price);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

