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
    removeCart: (state, action) => {
      if(!state.contents[action.payload.productId]) {
        return state
      }
      state.contents[action.payload.productId].quantity -= 1
      
      if(state.contents[action.payload.productId].quantity === 0) {
        delete state.contents[action.payload.productId]
      }
      localStorage.setItem(CART_STORAGE, JSON.stringify(state.contents))
      return state
    }
  },
})

export const selectCart = (state) => state.cart

export const { loadCart, addCart, removeCart } = cartSlice.actions

export default cartSlice.reducer
