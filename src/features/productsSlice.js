import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../lib/supabaseClient'

// Fetches all rows from the products table using the Supabase JS client directly
// This is used for the default query — no custom SQL needed
// Part of the query flow: triggered by handleRun in App when the SQL matches the default
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data, error } = await supabase.from('products').select('*')
  if (error) throw error
  return data
})

// Runs a custom SQL string against the database via the run_sql Postgres function in Supabase
// The run_sql function must be created in Supabase first — it accepts a query string and returns JSON
// Part of the query flow: triggered by handleRun in App when the user has typed their own SQL
export const runCustomQuery = createAsyncThunk('products/runCustomQuery', async (sql) => {
  const { data, error } = await supabase.rpc('run_sql', { query: sql })
  if (error) throw error
  return data || []
})

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],         // The rows returned by the last query
    status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,      // Error message if the query failed
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // While fetchProducts is running, set status to loading so the UI can show a spinner/message
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      // When fetchProducts succeeds, store the returned rows and mark as succeeded
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      // If fetchProducts fails, store the error message so the UI can display it
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Same loading/success/failure pattern for custom SQL queries
      .addCase(runCustomQuery.pending, (state) => {
        state.status = 'loading'
        state.error = null // Clear any previous error when a new query starts
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
