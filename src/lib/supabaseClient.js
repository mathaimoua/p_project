import { createClient } from '@supabase/supabase-js'

// Read the Supabase connection details from environment variables
// These are set in the .env file at the project root and must be prefixed with REACT_APP_
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// Create and export a single Supabase client instance
// This is imported by productsSlice.js to run queries against the database
export const supabase = createClient(supabaseUrl, supabaseKey)
