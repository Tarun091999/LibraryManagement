import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};
export const BooksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {
    addProduct(state, action) {
      console.log(action.payload);
      const item = action.payload;  

      let productItem = state.cartItems.find(product => product.bookId === item.bookId);

      if(!productItem){
            state.cartItems = [item ,...state.cartItems];
              Swal.fire({
              position: 'bottom-end',
              icon: 'success',
              title: 'Your item has been saved',
              showConfirmButton: false,
              timer: 1000,
              width:"250px",
            });
          }  
          else{
            Swal.fire({
              position: 'bottom-end',
              icon: 'error',
              title: 'Book Already In Cart',
              showConfirmButton: false,
              timer: 1000,
              width:"250px",
            })
          }
    },
    removeProduct(state , action)
    {
      console.log(action.payload)
      const bookId = action.payload
      state.cartItems= state.cartItems.filter((item)=>
      item.bookId!= bookId)
    }
  },
});
export const { addProduct, removeProduct } = BooksSlice.actions;

export default BooksSlice.reducer;
