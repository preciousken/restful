import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importing the components
import Homepage from "./PAGES/Home";
import Cart from "./PAGES/Cart";
import AdminDashboard from "./PAGES/AdminDashboard";
import SingleProdudct from "./PAGES/SingleProduct"
import Login from "./PAGES/Login";
import Register from "./PAGES/Register";
import SearchPage from "./PAGES/SearchPage";


import './App.css'
import './responsiveness.css'
import Loading from "./assets/components/Loading";

import Success from "./PAYMENTSTATUS/Success";
import Cancel from "./PAYMENTSTATUS/Cancel";

// importing the pages

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} >
      </Route>
      <Route path="/cart" element={<Cart/>} >
      </Route>
      {/* <Route path="/admin" element={<Adminpanel/>}></Route> */}
      <Route path="/admin" element={<AdminDashboard/>}></Route>
      <Route path="/singleproduct" element={<SingleProdudct/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/search" element={<SearchPage/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="/cancel" element={<Cancel/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
