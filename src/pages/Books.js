import React , {useState, useEffect} from 'react'
import axios from "axios";
import BookCard from '../components/BookCard';
import Navigation from '../components/Navigation';
import Loader from '../components/Loader';


//get token from session storage
const token = sessionStorage.getItem("token");

export default function Books() {
  const[booksList, setbooksList]= useState();
  let books =[];
  let tempArr=[]
  useEffect(()=>{
    axios.get("https://localhost:7197/api/Book/getBooks", { headers: {"Authorization" : `Bearer ${token}`} })
    .then((res)=>{
      books=res.data
      console.log(res.data)
      books.map((item)=>{
        if(item.bookQuantity>0)
        {
          tempArr.push(item)
        }
      })
      setbooksList(tempArr)
    })
    .catch ((err)=>{
     console.log( "Error " ,err)
    })
   

  },[])
 
  console.log(booksList)
     
  return (
    <>
     <Navigation/>
      <h1 className='text-center'>Pick Book On Rent</h1>
      <hr className='w-75 m-auto p-2'/>
      {booksList ? <BookCard books={booksList}/>:<Loader/>  }
    </>
  );
}
