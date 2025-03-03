import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const fakeStoreUrl = 'https://fakestoreapi.com'

const initialState = {
  items: [],
  ids: [],
  loading: false,
  error: '',
}

export const fetchAll = createAsyncThunk('product/fetchAll', () => {
  return fetch(`${fakeStoreUrl}/products`).then((res) => res.json())
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.pending, (state) => {
      state.loading = true
      return state
    })
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.loading = false
      state.ids = action.payload.map((product) => {
        state.items[product.id] = product
        return product.id
      })
      state.error = ''
      return state
    })
    builder.addCase(fetchAll.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || ''
      return state
    })
  },
})

export const selectProduct = (state) => state.product

export default productSlice.reducer
