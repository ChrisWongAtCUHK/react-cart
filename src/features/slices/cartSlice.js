import { createSlice } from '@reduxjs/toolkit'
const CART_STORAGE = 'CART_STORAGE'

const initialState = {
  contents: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadCart: (state) => {
      state.contents = JSON.parse(localStorage.getItem(CART_STORAGE)) || {}
      return state
    },
    addCart: (state, action) => {
      if (state.contents[action.payload.productId]) {
        state.contents[action.payload.productId].quantity += 1
      } else {
        state.contents[action.payload.productId] = {
          productId: action.payload.productId,
          quantity: 1,
        }
      }
      localStorage.setItem(CART_STORAGE, JSON.stringify(state.contents))
      return state
    },
  },
})

export const selectCart = (state) => state.cart

export const { loadCart, addCart } = cartSlice.actions

export default cartSlice.reducer
