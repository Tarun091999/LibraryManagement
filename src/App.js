import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Payment from './pages/Payment';
import Cart from "./pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books' element={<Books/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path="/payment" element={<Payment/>}/>
   </Routes>

   </BrowserRouter>
  );
}

export default App;
