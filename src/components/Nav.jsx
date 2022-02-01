import React, { useState, useEffect } from "react";
import { Link, useLocation , useNavigate } from "react-router-dom";

import logo  from "../assets/card/logo.png";
import { auth } from "../firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { itemsAction } from "../store";
const Nav = () => {
  const data = useSelector(state => state.cardInfo.items)
  const logged = useSelector(state => state.cardInfo.logged)

  
  const [activeTab, setActiveTab] = useState("places");
const [user , setUser] = useState({})
const [menu , setMenu] = useState(false)
const navigate = useNavigate();
const dispatch = useDispatch()
 onAuthStateChanged(auth, (currentUser) => {

setUser(currentUser)
if (currentUser) {
  dispatch(itemsAction.loginAcount())
}
  })

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveTab("about");
      setMenu(false)
    } else if (location.pathname === "/news/featured") {
      setActiveTab("news");
      setMenu(false)
    } else if (location.pathname === "/news/popular") {
      setActiveTab("news");
      setMenu(false)
    } else if (location.pathname === "/reviews") {
      setActiveTab("reviews");
      setMenu(false)
    } else if (location.pathname === "/") {
      setActiveTab("places");
      setMenu(false)
    } else if (location.pathname === "/book") {
      setActiveTab("book");
      setMenu(false)
    } else if (location.pathname !== "/") {
      setActiveTab(" ");
      setMenu(false)
    } else {
      setActiveTab("places");
      setMenu(false)
    }
  }, [location.pathname]);

  const logout = async () => {
    await signOut(auth)
loggedAcount()
  }
  const loggedAcount = () => {
    dispatch(itemsAction.loggedAcount())
    navigate('/')
    
  }
   return (
    <nav className=" sticky top-0 z-40 bg-slate-200">
      <div className="flex justify-between items-center  w-5/6 mx-auto">
        <div className="w-28 ">
          <Link to="/" className="w-full text-2xl font-medium">
            <img src={logo} className="w-full object-contain" alt="" />
          </Link>
        </div>
   
        <ul className="hidden md:flex  md:justify-around  md:items-center md:gap-9 md:text-sm ">
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
data.length > 0 && logged? 
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

        <div className="hidden  md:flex md:items-center md:gap-8 md:text-sm ">
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
    
<div className="md:hidden ">
  <span>{!menu ? <AiOutlineMenu className="text-3xl cursor-pointer" onClick={() => setMenu(!menu)}/> : <AiOutlineClose className="text-3xl cursor-pointer" onClick={() => setMenu(!menu)}/>} </span>
</div>
      </div>
      {menu ? <div className={`w-full h-screen transition duration-1000 trnasform  ${menu ? 'translate-x-0 ' : 'translate-x-full '} fixed z-50  bg-slate-100 pt-4  md:hidden`}>
        
        <ul className="flex  justify-around pl-7   gap-y-9 text-sm  flex-col md:hidden">
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
  data.length > 0 && logged? 
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
  
          <div className=" flex pl-10 gap-y-8 text-sm  flex-col md:hidden">
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
      
        </div> :' '}
      
    </nav>
  );
};

export default Nav;
