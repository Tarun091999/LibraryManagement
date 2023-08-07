import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./pages/Students";
import RentalBooks from "./pages/RentalBooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books" element={<Books/>} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/students/" element={<Students />}/>
        <Route path="/rentalbooks" element={<RentalBooks/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
