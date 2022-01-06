import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo  from "../assets/card/logo.png";
import { auth } from "../firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Nav = () => {
  const data = useSelector(state => state.cardInfo.items)
  const [activeTab, setActiveTab] = useState("places");
const [user , setUser] = useState({})
 onAuthStateChanged(auth, (currentUser) => {

setUser(currentUser)
  })

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveTab("about");
    } else if (location.pathname === "/news/featured") {
      setActiveTab("news");
    } else if (location.pathname === "/news/popular") {
      setActiveTab("news");
    } else if (location.pathname === "/reviews") {
      setActiveTab("reviews");
    } else if (location.pathname === "/") {
      setActiveTab("places");
    } else if (location.pathname === "/book") {
      setActiveTab("book");
    } else if (location.pathname !== "/") {
      setActiveTab(" ");
    } else {
      setActiveTab("places");
    }
  }, [location.pathname]);

  const logout = async () => {
    await signOut(auth)
  }
  return (
    <nav className="">
      <div className="flex justify-between items-center py-8 w-5/6 mx-auto">
        <div className="w-28 ">
          <Link to="/" className="w-full text-2xl font-medium">
            <img src={logo} className="w-full object-contain" alt="" />
          </Link>
        </div>
        <ul className="flex  justify-around  items-center gap-9 text-sm ">
          <li className="">
            <Link
              to="/"
              className={`py-1 px-3 ${
                activeTab === "places" ? " opacity-80" : "opacity-50"
              }`}
              onClick={() => setActiveTab("places")}
            >
              Places
            </Link>
          </li>
          <li className="">
            <Link
              to="/news/featured"
              className={`py-1 px-3 ${
                activeTab === "news" ? " opacity-80" : "opacity-50"
              }`}
              onClick={() => setActiveTab("news")}
            >
              News
            </Link>
          </li>
          <li className="">
            <Link
              to="/reviews"
              className={`py-1 px-3 ${
                activeTab === "reviews" ? " opacity-80" : "opacity-50"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </Link>
          </li>
          {
data.length > 0? 
          <li className="">
            <Link
              to="/book"
              className={`py-1 px-3 ${
                activeTab === "book" ? " opacity-80" : "opacity-50"
              }`}
              onClick={() => setActiveTab("book")}
            >
              Book
            </Link>
          </li> :''
          }
       
        </ul>

        <div className="flex items-center gap-8 text-sm ">
        <div className="">
      {user?.email}
    </div>
          {
      user? <button className="" onClick={logout}>Log out</button> :
<>
          <Link to='/login'>
          <button className="">Login</button>
          </Link>
          <Link to='/signup'>
          <button className="bg-black text-white rounded-md w-20 py-1 text-center text-sm">
            Sign up
          </button>
          </Link>
          </>
    }
    
    </div>
      </div>
    </nav>
  );
};

export default Nav;
