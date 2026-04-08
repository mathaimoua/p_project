import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../lib/supabaseClient'

export const runCustomQuery = createAsyncThunk('sql/runCustomQuery', async (query) => {
  const { data, error } = await supabase.rpc('run_sql', { query: query })
  if (error) throw error
  return data
})

export const fetchProducts = createAsyncThunk('sql/fetchProducts', async () => {
  const { data, error } = await supabase.from('products').select('*')
  if (error) throw error
  return data
})

const sqlSlice = createSlice({
  name: 'sql',
  initialState: {
    results: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearResults: (state) => {
      state.results = []
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(runCustomQuery.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(runCustomQuery.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.results = action.payload
      })
      .addCase(runCustomQuery.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.results = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { clearResults } = sqlSlice.actions
export default sqlSlice.reducer