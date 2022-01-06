import React , {useState} from "react";
import img10 from "../assets/card/10.jpg";
import { Link,  useNavigate } from "react-router-dom";
import logo from "../assets/card/logo.png";
import { auth } from '../firebase'

import { createUserWithEmailAndPassword } from 'firebase/auth'
const SignUp = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



const navigate =useNavigate()

const signHandler = (e) => {
  e.preventDefault()

 if (name && phone && email && password) {
  try {
    const signup = createUserWithEmailAndPassword(auth , email , password);
    if (signup) {
      navigate('/')
    }
  } catch (error) {
    console.log(error.message);
  }
 }
}

  return (
    <div className="flex h-screen">
      <div className="flex w-5/12  justify-center ">
        <div className="w-full h-full">
        <Link to="/" className="">
            <h1 className="mb-16 text-3xl font-semibold w-full mx-10">
              <img src={logo} className="w-32 " alt="" />
            </h1>
          </Link>
            <h1 className="mb-10 text-2xl text-center font-medium w-full">
              Personal inforamtion
            </h1>
          
          <form action="" onSubmit={signHandler}  className="flex flex-col gap-y-5 w-full  items-center">
          <div className="flex flex-col gap-y-1">
              <label htmlFor="name" className="opacity-80 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-72 py-1 border-2 opacity-90 rounded-md px-2"

                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="phone" className="opacity-80 text-sm">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="w-72 py-1 border-2 opacity-90 rounded-md px-2"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="opacity-80 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-72 py-1 border-2 opacity-90 rounded-md px-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="opacity-80 text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-72 py-1 border-2 opacity-90 rounded-md px-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-72">
              <button className="bg-black text-white block w-full rounded-md py-2">
                Sign up
              </button>
            </div>
            <div className="w-72 flex justify-between">
              <div className="flex gap-x-2 items-center">
                <input type="checkbox" className="text-sm" />
                <span className="opacity-75 text-sm">Remember me</span>
              </div>
            
            </div>
          </form>
        </div>
      </div>
      <div className="h-full flex-1 w-full relative ">
        <div className="w-full h-full absolute bg-gradient-to-b from-zinc-200 to-zinc-900 opacity-60"></div>
        <img src={img10} className="h-full w-full object-cover" alt="" />
        <div className="absolute w-full h-full  top-0  text-white">
          <div className="w-full h-full  flex flex-col justify-center pl-44 gap-y-2">
            <h1 className="text-7xl w-96">Find your own hotel</h1>
            <p className="text-sm opacity-90">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
              placeat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
