import { configureStore } from '@reduxjs/toolkit'
import sqlReducer from '../features/sqlSlice'

const store = configureStore({
  reducer: {
    sql: sqlReducer,
  },
})

export default store