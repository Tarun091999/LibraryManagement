import { configureStore } from '@reduxjs/toolkit'
import BooksSlice from './Slices/BooksSlice'
export const Store = configureStore({
  reducer: {
    Books: BooksSlice
  },
})