import { configureStore } from '@reduxjs/toolkit'
import BooksSlice from './Slices/BooksSlice'
import  StudentSlice  from './Slices/StudentSlice'
export const Store = configureStore({
  reducer: {
    Books: BooksSlice,
    Students:StudentSlice,
  },
})