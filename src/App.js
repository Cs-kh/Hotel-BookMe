import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import {
  Routes,
  Route,
  useLocation,
  
Navigate
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import News from "./pages/News";

import Popular from "./pages/Popular";
import HotelInfo from "./pages/HotelInfo";
import Book from "./pages/Book";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Reviews from "./pages/Reviews";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.cardInfo.items);
  const email= useSelector((state) => state.cardInfo.email);
  const location = useLocation();
  
  
  const items = useSelector((state) => state.cardInfo.items);

   
  const doesEmailExit = (email) => {
    return items.find((item) => item.email === email) ? true : false;
   }
useEffect(() => {
window.scrollTo(0,0)
}, [location.pathname])
  // useEffect(() => {
  //  const home = () => {
  // if (location.pathname === '/book') {
  //   if (data.length > 0) {
  //     navigate('/book')
  //   }else{
  //     navigate('/')
  //   }
  // }
  //  }
  //  home()
  // }, [data])
  return (
    <div className="m-0 p-0 box-border">
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        ""
      ) : (
        <Nav />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/featured" element={<News />} />
        <Route path="/news/popular" element={<Popular />} />
        <Route path="/hotel/:id" element={<HotelInfo />} />
        {data.length > 0 && doesEmailExit(email)? 
          <Route path="/book" element={<Book />} />
         : 
         <Route path="/book" element={<Navigate replace to="/" />} />
        }
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>

      {location.pathname === "/login" || location.pathname === "/signup" ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
