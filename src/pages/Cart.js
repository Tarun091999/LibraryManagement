import { Container } from "react-bootstrap";
import AllotmentBookCards from "../components/AllotmentBookCards";
import Navigation from "../components/Navigation";

import { useSelector } from 'react-redux'
export default function Cart() {
    const books = useSelector((state) => state.Books.cartItems)
  
  return (
    <>
      <Navigation/>
      <Container>

      
      <h1 >Your Cart Data</h1>
      <hr className="w-75"/>
      <br/>
       {  books ? <AllotmentBookCards books={books}/> :null}
      </Container>
    </>
  );
}
