import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../lib/supabaseClient'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data, error } = await supabase.from('products').select('*')
  if (error) throw error
  return data
})

export const runCustomQuery = createAsyncThunk('products/runCustomQuery', async (sql) => {
  const { data, error } = await supabase.rpc('run_sql', { query: sql })
  if (error) throw error
  return data || []
})

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(runCustomQuery.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(runCustomQuery.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(runCustomQuery.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default productsSlice.reducer
